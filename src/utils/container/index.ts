import { container } from "tsyringe";

import { IClientRepository } from "../../modules/clients/interfaces/IClientRepository";
import { ClientsRepository } from "../../modules/clients/repositories/ClientRepository";
import { IOrderRepository } from "../../modules/orders/interfaces/IOrderRepository";
import { OrderRepository } from "../../modules/orders/repositories/OrderRepository";
import IProductRepository from "../../modules/products/interfaces/IProductRepository";
import { ProductsRepository } from "../../modules/products/repositories/ProductRepository";
import IUsersRepository from "../../modules/users/interfaces/IUserRepository";
import { UsersRepository } from "../../modules/users/repositories/UserRepository";
import "./providers";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IClientRepository>(
  "ClientsRepository",
  ClientsRepository
);

container.registerSingleton<IProductRepository>(
  "ProductsRepository",
  ProductsRepository
);

container.registerSingleton<IOrderRepository>(
  "OrdersRepository",
  OrderRepository
);
