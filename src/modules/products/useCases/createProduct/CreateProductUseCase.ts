import { inject, injectable } from "tsyringe";

import IStorageProvider from "../../../../utils/container/providers/StorageProviders/IStorageProvider";
import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { CreateProductDto } from "../../dtos/create-product.dto";
import IProductInterface from "../../interfaces/IProductInterface";
import { Product } from "../../model/Product";

@injectable()
export class CreateProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productRespository: IProductInterface,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  async execute({ name, price, image }: CreateProductDto): Promise<Product> {
    const nameAlreadyExist = await this.productRespository.findByName(name);

    if (nameAlreadyExist) {
      throw new ErrorsApp(400, "Product Already Exist");
    }

    const filename = await this.storageProvider.save(image, "image");

    const code = Math.floor(Math.random() * 10000);

    const product = await this.productRespository.create({
      name,
      price,
      code,
      image: filename,
    });

    return product;
  }
}
