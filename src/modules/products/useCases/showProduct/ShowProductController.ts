import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowProductUseCase } from "./ShowProductUseCase";

export class ShowProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const productId = req.params.id;

    const showProduct = container.resolve(ShowProductUseCase);

    const product = await showProduct.execute({ productId });

    return res.json({ success: true, product });
  }
}
