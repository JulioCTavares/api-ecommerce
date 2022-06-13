import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowClientUseCase } from "./ShowClientUseCase";

export class ShowClientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const clientId = req.params.id;

    const showUser = container.resolve(ShowClientUseCase);

    const client = await showUser.execute({ clientId });

    return res.json({ sucess: true, client });
  }
}
