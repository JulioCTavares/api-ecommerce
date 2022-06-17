import { inject, injectable } from "tsyringe";

import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { IClientRepository } from "../../interfaces/IClientRepository";

interface IRequest {
  clientId: string;
}

@injectable()
export class DeleteClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientRepository
  ) {}

  async execute({ clientId }: IRequest): Promise<void> {
    const client = await this.clientsRepository.findById(clientId);

    if (!client) {
      throw new ErrorsApp(404, "Client not found");
    }

    await this.clientsRepository.delete(client);
  }
}
