import { inject, injectable } from "tsyringe";

import { Order } from "../../entities/Order";
import { IOrderRepository } from "../../interfaces/IOrderRepository";

@injectable()
export class ListAllOrdersUseCase {
  constructor(
    @inject("OrdersRepository")
    private ordersRepository: IOrderRepository
  ) {}

  async execute(): Promise<Order[]> {
    const orders = await this.ordersRepository.findAll();

    return orders;
  }
}
