/* eslint-disable prettier/prettier */
export enum OrderStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  DENIED = 'DENIED'
}

export class CreateOrderDto {
  client_id: string;
  product_id: string;
}
