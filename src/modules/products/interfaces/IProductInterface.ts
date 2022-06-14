import { CreateProductDto } from "../dtos/create-product.dto";
import { Product } from "../model/Product";

export default interface IProductInterface {
  create(data: CreateProductDto): Promise<Product>;
  // findById(id: string): Promise< Product | null>;
  // findAll(): Promise<Product[]>;
  // delete(prodct: Product): Promise<void>;
}
