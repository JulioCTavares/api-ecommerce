import { CreateProductDto } from "../dtos/create-product.dto";
import { Product } from "../entities/Product";

export default interface IProductRepository {
  create(data: CreateProductDto): Promise<Product>;
  findById(id: string): Promise<Product | null>;
  findByName(name: string): Promise<Product | null>;
  findByCode(code: number): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  delete(product: Product): Promise<void>;
}
