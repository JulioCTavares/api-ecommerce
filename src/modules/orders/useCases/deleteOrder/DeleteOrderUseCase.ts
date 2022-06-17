import { inject, injectable } from "tsyringe";

import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { IOrderRepository } from "../../interfaces/IOrderRepository";

interface IRequest {
  orderId: string;
}

@injectable()
export class DeleteOrderUseCase {
  constructor(
    @inject("OrdersRepository")
    private ordersRepository: IOrderRepository
  ) {}

  async execute({ orderId }: IRequest): Promise<void> {
    const order = await this.ordersRepository.findById(orderId);

    if (!order) {
      throw new ErrorsApp(404, "Order does not found");
    }

    await this.ordersRepository.delete(order);
  }
}
