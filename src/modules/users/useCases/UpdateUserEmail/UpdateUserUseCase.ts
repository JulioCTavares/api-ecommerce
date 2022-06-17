import { inject, injectable } from "tsyringe";

import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { User } from "../../entities/User";
import IUserRepository from "../../interfaces/IUserRepository";

interface IRequest {
  userId: string;
  email: string;
}

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRespository: IUserRepository
  ) {}

  async execute({ userId, email }: IRequest): Promise<User | null> {
    const user = await this.usersRespository.findById(userId);

    if (!user) {
      throw new ErrorsApp(404, "User not found");
    }

    const userEmailToBeUpdated = await this.usersRespository.findByEmail(email);

    if (userEmailToBeUpdated) {
      throw new ErrorsApp(401, "Email already in use");
    }

    await this.usersRespository.updateEmail(user, email);

    const { password, ...restUser } = user;

    return restUser;
  }
}
