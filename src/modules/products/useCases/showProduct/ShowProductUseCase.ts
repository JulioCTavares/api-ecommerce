import { inject, injectable } from "tsyringe";

import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { Product } from "../../entities/Product";
import IProductRepository from "../../interfaces/IProductRepository";

interface IRequest {
  productId: string;
}

@injectable()
export class ShowProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductRepository
  ) {}

  async execute({ productId }: IRequest): Promise<Product> {
    const product = await this.productsRepository.findById(productId);

    if (!product) {
      throw new ErrorsApp(404, "Product not found");
    }

    return product;
  }
}
