import { inject, injectable } from "tsyringe";

import IUsersInterface from "../../interfaces/IUserInterface";
import { User } from "../../model/User";

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRespository: IUsersInterface
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRespository.findAll();

    return users;
  }
}
