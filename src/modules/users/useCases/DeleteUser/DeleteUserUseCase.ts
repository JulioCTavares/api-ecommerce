import { inject, injectable } from "tsyringe";

import ErrorsApp from "../../../../utils/errors/ErrorApp";
import IUsersInterface from "../../interfaces/IUserInterface";

interface IRequest {
  userId: string;
}

@injectable()
export class DeleteUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRespository: IUsersInterface
  ) {}

  async execute({ userId }: IRequest): Promise<void> {
    const user = await this.usersRespository.findById(userId);

    if (!user) {
      throw new ErrorsApp(404, "User not found");
    }

    await this.usersRespository.delete(user);
  }
}
