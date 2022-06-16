import { inject, injectable } from "tsyringe";

import ErrorsApp from "../../../../utils/errors/ErrorApp";
import IUsersInterface from "../../interfaces/IUserInterface";
import { User } from "../../model/User";

interface IRequest {
  userId: string;
}

@injectable()
export class ShowUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRespository: IUsersInterface
  ) {}

  async execute({ userId }: IRequest): Promise<User> {
    const user = await this.usersRespository.findById(userId);

    if (!user) {
      throw new ErrorsApp(404, "User does not found");
    }

    return user;
  }
}
