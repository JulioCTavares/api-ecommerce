import { container } from "tsyringe";

import { IClientInterface } from "../../modules/clients/interfaces/IClientInterface";
import { ClientsRepository } from "../../modules/clients/repositories/ClientRepository";
import IProductInterface from "../../modules/products/interfaces/IProductInterface";
import { ProductsRepository } from "../../modules/products/repositories/ProductRepository";
import IUsersInterface from "../../modules/users/interfaces/IUserInterface";
import { UsersRepository } from "../../modules/users/repositories/UserRepository";
import "./providers";

container.registerSingleton<IUsersInterface>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IClientInterface>(
  "ClientsRepository",
  ClientsRepository
);

container.registerSingleton<IProductInterface>(
  "ProductsRepository",
  ProductsRepository
);
