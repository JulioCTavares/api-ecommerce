import { IsInt, IsNumber, IsString } from "class-validator";

export class Product {
  id?: string;

  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsInt()
  code: number;

  image: string;
}
