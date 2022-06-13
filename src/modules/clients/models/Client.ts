import { Exclude } from "class-transformer";
import { IsEmail, IsString } from "class-validator";

export class Client {
  id?: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Exclude()
  password: string;

  @IsString()
  phone: string;

  @IsString()
  address: string;
}
