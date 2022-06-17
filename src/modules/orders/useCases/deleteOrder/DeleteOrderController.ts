import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteOrderUseCase } from "./DeleteOrderUseCase";

export class DeleteOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const orderId = req.params.id;

    const deleteOrder = container.resolve(DeleteOrderUseCase);

    await deleteOrder.execute({ orderId });

    return res.status(204).send();
  }
}
