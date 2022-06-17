import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import authConfig from "../../../../config/auth";
import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { User } from "../../entities/User";
import IUserRepository from "../../interfaces/IUserRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new ErrorsApp(401, "Email or Password incorrect ");
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new ErrorsApp(401, "Email or Password incorrect ");
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
