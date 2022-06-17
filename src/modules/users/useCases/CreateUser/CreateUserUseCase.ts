import { hash } from "bcrypt";
import path from "path";
import { inject, injectable } from "tsyringe";

import IMailProvider from "../../../../utils/container/providers/MailProvider/IMailProvider";
import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { CreateUserDto } from "../../dtos/create-user.dto";
import { User } from "../../entities/User";
import IUsersRepository from "../../interfaces/IUserRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("MailProvider")
    private mailProvider: IMailProvider
  ) {}

  async execute({ email, passwordDto }: CreateUserDto): Promise<User> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new ErrorsApp(400, "User already exists");
    }

    const hashedPassword = await hash(passwordDto, 10);

    const user = this.usersRepository.create({
      email,
      passwordDto: hashedPassword,
    });

    const confirmUserTemplate = path.resolve(
      __dirname,
      "..",
      "..",
      "views",
      "confirm-user.hbs"
    );

    const variables = {
      name: (await user).email,
      link: `${process.env.APP_API_URL}/confirm-user?`,
    };

    await this.mailProvider.sendMail(
      email,
      "Registration Confirmation",
      variables,
      confirmUserTemplate
    );

    const { password, ...userReturn } = await user;

    return userReturn;
  }
}
