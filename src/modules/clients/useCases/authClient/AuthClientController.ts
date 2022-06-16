import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateClientUseCase } from "./AuthClientUseCase";

export class AuthenticateClientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticate = container.resolve(AuthenticateClientUseCase);

    const { client, token } = await authenticate.execute({
      email,
      password,
    });

    return res.json({ success: true, client, token });
  }
}
