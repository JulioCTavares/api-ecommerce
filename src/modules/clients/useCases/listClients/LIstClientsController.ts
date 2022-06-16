import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListClientsUseCase } from "./ListClientsUseCase";

export class ListClientsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const clients = container.resolve(ListClientsUseCase);

    const allClients = await clients.execute();

    return res.json({ success: true, allClients });
  }
}
