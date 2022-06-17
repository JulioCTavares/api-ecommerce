import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowOrderUseCase } from "./ShowOrderUseCase";

export class ShowOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const orderId = req.params.id;

    const showOrder = container.resolve(ShowOrderUseCase);

    const order = await showOrder.execute({ orderId });

    return res.json({ success: true, order });
  }
}
