import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllOrdersUseCase } from "./ListAllOrdersUseCase";

export class ListAllOrdersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listAllOrders = container.resolve(ListAllOrdersUseCase);

    const allOrders = await listAllOrders.execute();

    return res.json({ success: true, allOrders });
  }
}
