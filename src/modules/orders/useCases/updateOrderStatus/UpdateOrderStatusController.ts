import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateOrderStatusUseCase } from "./UpdateOrderStatusUseCase";

export class UpdateOrderStatusController {
  async handle(req: Request, res: Response): Promise<Response> {
    const orderId = req.params.id;

    const { status } = req.body;

    const updateOrderStatus = container.resolve(UpdateOrderStatusUseCase);

    const updatedOrder = await updateOrderStatus.execute({ orderId, status });

    return res.json({ success: true, updatedOrder });
  }
}
