import { inject, injectable } from "tsyringe";

import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { Order } from "../../entities/Order";
import { IOrderRepository } from "../../interfaces/IOrderRepository";

interface IRequest {
  orderId: string;
}

@injectable()
export class ShowOrderUseCase {
  constructor(
    @inject("OrdersRepository")
    private ordersRepository: IOrderRepository
  ) {}

  async execute({ orderId }: IRequest): Promise<Order | null> {
    const order = await this.ordersRepository.findById(orderId);

    if (!order) {
      throw new ErrorsApp(404, "Order does not found");
    }

    return order;
  }
}
