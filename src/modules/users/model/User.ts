import { Exclude } from "class-transformer";
import { IsEmail, IsString } from "class-validator";

export class User {
  id?: string;
  @IsEmail()
  email: string;

  @IsString()
  @Exclude()
  password: string;
}
