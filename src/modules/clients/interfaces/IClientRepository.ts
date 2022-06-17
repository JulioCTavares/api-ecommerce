import { CreateClientDto } from "../dtos/create-client.dto";
import { Client } from "../entities/Client";

export interface IClientRepository {
  create(data: CreateClientDto): Promise<Client>;
  findByEmail(email: string): Promise<Client | null>;
  findById(id: string): Promise<Client | null>;
  findByName(name: string): Promise<Client | null>;
  findAll(): Promise<Client[]>;
  updateEmail(data: Client, email: string): Promise<Client | null>;
  delete(client: Client): Promise<void>;
}
