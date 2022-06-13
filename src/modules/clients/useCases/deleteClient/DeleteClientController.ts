import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteClientUseCase } from "./DeleteClientUseCase";

export class DeleteClientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const clientId = req.params.id;

    const deleteClient = container.resolve(DeleteClientUseCase);

    await deleteClient.execute({ clientId });

    return res.status(204).send();
  }
}
