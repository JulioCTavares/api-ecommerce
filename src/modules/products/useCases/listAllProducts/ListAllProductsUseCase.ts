import { inject, injectable } from "tsyringe";

import { Product } from "../../entities/Product";
import IProductRepository from "../../interfaces/IProductRepository";

@injectable()
export class ListAllProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductRepository
  ) {}

  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.findAll();

    return products;
  }
}
