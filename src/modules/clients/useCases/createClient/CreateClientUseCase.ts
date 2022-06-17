import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { CreateClientDto } from "../../dtos/create-client.dto";
import { Client } from "../../entities/Client";
import { IClientRepository } from "../../interfaces/IClientRepository";

@injectable()
export class CreateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientRepository: IClientRepository
  ) {}

  async execute({
    name,
    email,
    password,
    phone,
    address,
  }: CreateClientDto): Promise<Client> {
    const emailExists = await this.clientRepository.findByEmail(email);

    if (emailExists) {
      throw new ErrorsApp(401, "Client Already Exists");
    }

    const nameExist = await this.clientRepository.findByName(name);

    if (nameExist) {
      throw new ErrorsApp(401, "Client Name Already Exists");
    }

    const hashedPassword = await hash(password, 10);

    const client = await this.clientRepository.create({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    });

    return client;
  }
}
