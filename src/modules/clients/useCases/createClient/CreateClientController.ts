import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password, phone, address } = req.body;

    const createClientUseCase = container.resolve(CreateClientUseCase);

    const client = await createClientUseCase.execute({
      name,
      email,
      password,
      phone,
      address,
    });

    return res.status(201).json({ sucess: true, client });
  }
}
