import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticate = container.resolve(AuthenticateUserUseCase);

    const { user, token } = await authenticate.execute({
      email,
      password,
    });

    return res.json({ success: true, user, token });
  }
}
