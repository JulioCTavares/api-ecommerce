import { container } from "tsyringe";

import { IClientRepository } from "../../modules/clients/interfaces/IClientRepository";
import { ClientsRepository } from "../../modules/clients/repositories/ClientRepository";
import { IOrderRepository } from "../../modules/orders/interfaces/IOrderRepository";
import { OrderRepository } from "../../modules/orders/repositories/OrderRepository";
import IProductInterface from "../../modules/products/interfaces/IProductInterface";
import { ProductsRepository } from "../../modules/products/repositories/ProductRepository";
import IUsersInterface from "../../modules/users/interfaces/IUserInterface";
import { UsersRepository } from "../../modules/users/repositories/UserRepository";
import "./providers";

container.registerSingleton<IUsersInterface>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IClientRepository>(
  "ClientsRepository",
  ClientsRepository
);

container.registerSingleton<IProductInterface>(
  "ProductsRepository",
  ProductsRepository
);

container.registerSingleton<IOrderRepository>(
  "OrdersRepository",
  OrderRepository
);
