import { inject, injectable } from "tsyringe";

import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { User } from "../../entities/User";
import IUserRepository from "../../interfaces/IUserRepository";

interface IRequest {
  userId: string;
}

@injectable()
export class ShowUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRespository: IUserRepository
  ) {}

  async execute({ userId }: IRequest): Promise<User> {
    const user = await this.usersRespository.findById(userId);

    if (!user) {
      throw new ErrorsApp(404, "User does not found");
    }

    const { password, ...userReturn } = user;

    return userReturn;
  }
}
