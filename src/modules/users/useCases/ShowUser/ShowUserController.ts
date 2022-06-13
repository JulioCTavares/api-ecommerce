import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowUserUseCase } from "./ShowUserUseCase";

export class ShowUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const userId = req.params.id;

    const showUser = container.resolve(ShowUserUseCase);

    const user = await showUser.execute({ userId });

    return res.json({ sucess: true, user });
  }
}
