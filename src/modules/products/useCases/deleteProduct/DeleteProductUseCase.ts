import { inject, injectable } from "tsyringe";

import ErrorsApp from "../../../../utils/errors/ErrorApp";
import IProductRepository from "../../interfaces/IProductRepository";

interface IRequest {
  productId: string;
}

@injectable()
export class DeleteProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductRepository
  ) {}

  async execute({ productId }: IRequest): Promise<void> {
    const product = await this.productsRepository.findById(productId);

    if (!product) {
      throw new ErrorsApp(404, "User not found");
    }

    await this.productsRepository.delete(product);
  }
}
