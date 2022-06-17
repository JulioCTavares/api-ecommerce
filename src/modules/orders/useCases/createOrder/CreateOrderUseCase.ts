import { inject, injectable } from "tsyringe";

import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { IClientRepository } from "../../../clients/interfaces/IClientRepository";
import IProductInterface from "../../../products/interfaces/IProductInterface";
import { CreateOrderDto } from "../../dtos/create-order.dto";
import { Order } from "../../entities/Order";
import { IOrderRepository } from "../../interfaces/IOrderRepository";

@injectable()
export class CreateOrderUseCase {
  constructor(
    @inject("OrdersRepository")
    private ordersRepository: IOrderRepository,
    @inject("ClientsRepository")
    private clientsRepository: IClientRepository,
    @inject("ProductsRepository")
    private productsRepository: IProductInterface
  ) {}

  async execute({ client_id, product_id }: CreateOrderDto): Promise<Order> {
    const client = await this.clientsRepository.findById(client_id);

    if (!client) {
      throw new ErrorsApp(404, "Client does not found");
    }

    const product = await this.productsRepository.findById(product_id);

    if (!product) {
      throw new ErrorsApp(404, "Client does not found");
    }
    const order = await this.ordersRepository.create({ client_id, product_id });

    return order;
  }
}
