import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import authConfig from "../../../../config/auth";
import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { UsersRepository } from "../../repositories/UserRepository";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export async function ensuredAuthenticated(
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
    const { sub: userId } = verify(
      token,
      authConfig.jwt.secret
    ) as ITokenPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(userId);

    if (!user) {
      throw new ErrorsApp(404, "User not found");
    }

    req.user = {
      id: userId,
    };

    return next();
  } catch (error) {
    throw new ErrorsApp(401, "Invalid Token");
  }
}
