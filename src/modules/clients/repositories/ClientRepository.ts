import { prisma } from "../../../database/prisma";
import { CreateClientDto } from "../dtos/create-client.dto";
import { Client } from "../entities/Client";
import { IClientRepository } from "../interfaces/IClientRepository";

export class ClientsRepository implements IClientRepository {
  public async create({
    name,
    email,
    passwordDto,
    phone,
    address,
  }: CreateClientDto): Promise<Client> {
    const client = await prisma.client.create({
      data: { name, email, password: passwordDto, phone, address },
    });

    return client;
  }

  public async findAll(): Promise<Client[]> {
    const clients = await prisma.client.findMany();
    return clients;
  }

  public async findByEmail(email: string): Promise<Client | null> {
    const client = await prisma.client.findUnique({
      where: {
        email,
      },
    });

    return client;
  }

  public async findByName(name: string): Promise<Client | null> {
    const client = await prisma.client.findUnique({
      where: {
        name,
      },
    });

    return client;
  }

  public async findById(id: string): Promise<Client | null> {
    const client = await prisma.client.findUnique({
      where: {
        id,
      },
    });

    return client;
  }

  public async updateEmail(
    data: Client,
    email: string
  ): Promise<Client | null> {
    const client = await prisma.client.update({
      where: {
        id: data.id,
      },
      data: {
        email,
      },
    });

    return client;
  }

  public async delete(client: Client): Promise<void> {
    await prisma.client.delete({
      where: {
        email: client.email,
      },
    });
  }
}
