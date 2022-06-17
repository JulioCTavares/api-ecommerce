import { inject, injectable } from "tsyringe";

import { Client } from "../../entities/Client";
import { IClientRepository } from "../../interfaces/IClientRepository";

@injectable()
export class ListClientsUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientRepository
  ) {}

  async execute(): Promise<Client[]> {
    const clients = this.clientsRepository.findAll();

    return clients;
  }
}
