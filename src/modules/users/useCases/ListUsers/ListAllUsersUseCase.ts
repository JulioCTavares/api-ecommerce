import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import IUserRepository from "../../interfaces/IUserRepository";

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRespository: IUserRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRespository.findAll();

    return users;
  }
}
