import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const userId = req.params.id;

    const deleteUser = container.resolve(DeleteUserUseCase);

    await deleteUser.execute({ userId });

    return res.status(204).send();
  }
}
