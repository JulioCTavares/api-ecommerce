import { container } from "tsyringe";

import IUsersInterface from "../../modules/users/interfaces/IUserInterface";
import { UsersRepository } from "../../modules/users/repositories/UserRepository";

container.registerSingleton<IUsersInterface>(
  "UsersRepository",
  UsersRepository
);
