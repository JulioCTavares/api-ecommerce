import { inject, injectable } from "tsyringe";

import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { IClientInterface } from "../../interfaces/IClientInterface";
import { Client } from "../../models/Client";

interface IRequest {
  clientId: string;
}

@injectable()
export class ShowClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientInterface
  ) {}

  async execute({ clientId }: IRequest): Promise<Client> {
    const client = await this.clientsRepository.findById(clientId);

    if (!client) {
      throw new ErrorsApp(404, "Client does not found");
    }

    return client;
  }
}
