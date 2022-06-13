import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { CreateClientDto } from "../../dtos/create-client.dto";
import { IClientInterface } from "../../interfaces/IClientInterface";
import { Client } from "../../models/Client";

@injectable()
export class CreateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientRepository: IClientInterface
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
      throw new ErrorsApp(401, "Email already in use");
    }

    const nameExist = await this.clientRepository.findByName(name);

    if (nameExist) {
      throw new ErrorsApp(401, "Name already in use");
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
