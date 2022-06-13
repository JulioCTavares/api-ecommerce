import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { CreateUserDto } from "../../dtos/create-user.dto";
import IUsersInterface from "../../interfaces/IUserInterface";
import { User } from "../../model/User";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRespository: IUsersInterface
  ) {}

  async execute({ email, password }: CreateUserDto): Promise<User> {
    const userExists = await this.usersRespository.findByEmail(email);

    if (userExists) {
      throw new ErrorsApp(400, "User already exists!");
    }

    const hasedPassword = await hash(password, 10);

    const user = this.usersRespository.create({
      email,
      password: hasedPassword,
    });

    return user;
  }
}
