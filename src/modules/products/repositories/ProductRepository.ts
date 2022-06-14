import { prisma } from "../../../database/prisma";
import { CreateProductDto } from "../dtos/create-product.dto";
import IProductInterface from "../interfaces/IProductInterface";
import { Product } from "../model/Product";

export class ProductsRepository implements IProductInterface {
  public async create({
    name,
    price,
    code,
    image,
  }: CreateProductDto): Promise<Product> {
    const product = await prisma.product.create({
      data: { name, price, code, image },
    });

    return product;
  }
}
