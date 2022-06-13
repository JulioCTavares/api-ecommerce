import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const userId = req.params.id;

    const { email } = req.body;

    const updateUser = container.resolve(UpdateUserUseCase);

    const user = await updateUser.execute({ userId, email });

    return res.json({ sucess: true, user });
  }
}
