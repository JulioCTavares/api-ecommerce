import { inject, injectable } from "tsyringe";

import { IClientInterface } from "../../interfaces/IClientInterface";
import { Client } from "../../models/Client";

@injectable()
export class ListClientsUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientInterface
  ) {}

  async execute(): Promise<Client[]> {
    const clients = this.clientsRepository.findAll();

    return clients;
  }
}
