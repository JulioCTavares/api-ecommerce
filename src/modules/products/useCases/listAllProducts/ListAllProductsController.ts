import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllProductsUseCase } from "./ListAllProductsUseCase";

export class ListAllProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const allProducts = container.resolve(ListAllProductsUseCase);

    const products = await allProducts.execute();

    return res.json({ success: true, products });
  }
}
