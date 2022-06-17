import { prisma } from "../../../database/prisma";
import { CreateOrderDto, OrderStatus } from "../dtos/create-order.dto";
import { Order } from "../entities/Order";
import { IOrderRepository } from "../interfaces/IOrderRepository";

export class OrderRepository implements IOrderRepository {
  async create({ client_id, product_id }: CreateOrderDto): Promise<Order> {
    const order = await prisma.order.create({
      data: {
        client_id,
        product_id,
      },
    });

    return order;
  }

  async findAll(): Promise<Order[]> {
    const orders = await prisma.order.findMany();
    return orders;
  }

  async findById(id: string): Promise<Order | null> {
    const order = await prisma.order.findUnique({
      where: {
        id,
      },
    });

    return order;
  }

  async updateStatus(id: string, status: OrderStatus): Promise<Order | null> {
    const order = await prisma.order.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    return order;
  }

  async delete(order: Order): Promise<void> {
    await prisma.order.delete({
      where: {
        id: order.id,
      },
    });
  }
}
