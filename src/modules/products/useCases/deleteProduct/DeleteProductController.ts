import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteProductUseCase } from "./DeleteProductUseCase";

export class DeleteProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const productId = req.params.id;

    const deleteProduct = container.resolve(DeleteProductUseCase);

    await deleteProduct.execute({ productId });

    return res.status(204).send();
  }
}
