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

  public async findByName(name: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: {
        name,
      },
    });

    return product;
  }

  public async findAll(): Promise<Product[]> {
    const products = await prisma.product.findMany();
    return products;
  }

  public async findById(id: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    return product;
  }

  public async findByCode(code: number): Promise<Product | null> {
    const product = await prisma.product.findFirst({
      where: {
        code,
      },
    });

    return product;
  }

  public async delete(product: Product): Promise<void> {
    await prisma.product.delete({
      where: {
        name: product.name,
      },
    });
  }
}
