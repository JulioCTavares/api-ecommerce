import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateOrderUseCase } from "./CreateOrderUseCase";

export class CreateOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { client_id, product_id } = req.body;

    const createOrder = container.resolve(CreateOrderUseCase);

    const order = await createOrder.execute({ client_id, product_id });

    return res.status(201).json({ success: true, order });
  }
}
