import { CreateUserDto } from "../dtos/create-user.dto";
import { User } from "../model/User";

export default interface IUsersRepository {
  create(data: CreateUserDto): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  updateEmail(data: User, email: string): Promise<User | null>;
  delete(user: User): Promise<void>;
}
