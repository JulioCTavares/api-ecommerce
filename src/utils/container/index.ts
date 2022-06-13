import { container } from "tsyringe";

import { IClientInterface } from "../../modules/clients/interfaces/IClientInterface";
import { ClientsRepository } from "../../modules/clients/repositories/ClientRepository";
import IUsersInterface from "../../modules/users/interfaces/IUserInterface";
import { UsersRepository } from "../../modules/users/repositories/UserRepository";

container.registerSingleton<IUsersInterface>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IClientInterface>(
  "ClientsRepository",
  ClientsRepository
);
