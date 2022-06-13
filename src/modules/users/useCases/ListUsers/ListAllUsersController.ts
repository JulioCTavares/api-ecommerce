import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersUseCase } from "./ListAllUsersUseCase";

export class ListAllUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const users = container.resolve(ListUsersUseCase);

    const allUsers = await users.execute();

    return res.json({ sucess: true, allUsers });
  }
}
