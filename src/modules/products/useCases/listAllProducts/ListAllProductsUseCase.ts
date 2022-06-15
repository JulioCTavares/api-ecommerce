import { inject, injectable } from "tsyringe";

import IProductInterface from "../../interfaces/IProductInterface";
import { Product } from "../../model/Product";

@injectable()
export class ListAllProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductInterface
  ) {}

  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.findAll();

    return products;
  }
}
