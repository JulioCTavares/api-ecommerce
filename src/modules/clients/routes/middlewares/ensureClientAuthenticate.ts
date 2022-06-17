import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import authConfig from "../../../../config/auth";
import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { ClientsRepository } from "../../repositories/ClientRepository";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export async function ensuredClientAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new ErrorsApp(401, "Missing JWT Token");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: clientId } = verify(
      token,
      authConfig.jwt.secret
    ) as ITokenPayload;

    const clientRepository = new ClientsRepository();

    const client = await clientRepository.findById(clientId);

    if (!client) {
      throw new ErrorsApp(404, "Client not found");
    }

    req.client = {
      id: clientId,
    };

    return next();
  } catch (error) {
    throw new ErrorsApp(401, "Invalid Token");
  }
}
