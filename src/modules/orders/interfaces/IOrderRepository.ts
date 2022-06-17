import { OrderStatus } from "@prisma/client";

import { CreateOrderDto } from "../dtos/create-order.dto";
import { Order } from "../entities/Order";

export interface IOrderRepository {
  create(data: CreateOrderDto): Promise<Order>;
  findAll(): Promise<Order[]>;
  findById(id: string): Promise<Order | null>;
  updateStatus(id: string, status: OrderStatus): Promise<Order | null>;
  delete(order: Order): Promise<void>;
}
