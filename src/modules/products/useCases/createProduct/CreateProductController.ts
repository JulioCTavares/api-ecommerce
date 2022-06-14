import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, price } = req.body;

    const priceNumber = parseInt(price);

    const image = req.file?.filename;

    const createProduct = container.resolve(CreateProductUseCase);

    const product = await createProduct.execute({
      name,
      price: priceNumber,
      image,
    });

    return res.status(201).json({ sucess: true, product });
  }
}
