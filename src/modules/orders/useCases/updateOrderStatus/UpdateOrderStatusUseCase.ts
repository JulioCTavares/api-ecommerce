import { inject, injectable } from "tsyringe";

import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { OrderStatus } from "../../dtos/create-order.dto";
import { Order } from "../../entities/Order";
import { IOrderRepository } from "../../interfaces/IOrderRepository";

interface IRequest {
  orderId: string;
  status: OrderStatus;
}

@injectable()
export class UpdateOrderStatusUseCase {
  constructor(
    @inject("OrdersRepository")
    private ordersRepository: IOrderRepository
  ) {}

  async execute({ orderId, status }: IRequest): Promise<Order | null> {
    const order = await this.ordersRepository.updateStatus(orderId, status);

    if (!order) {
      throw new ErrorsApp(404, "Order does not found");
    }

    return order;
  }
}
