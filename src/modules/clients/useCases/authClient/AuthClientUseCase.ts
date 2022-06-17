import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import authConfig from "../../../../config/auth";
import ErrorsApp from "../../../../utils/errors/ErrorApp";
import { Client } from "../../entities/Client";
import { IClientRepository } from "../../interfaces/IClientRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  client: Client;
  token: string;
}

@injectable()
export class AuthenticateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const client = await this.clientsRepository.findByEmail(email);

    if (!client) {
      throw new ErrorsApp(401, "Email or Password incorrect ");
    }

    const passwordMatched = await compare(password, client.password);

    if (!passwordMatched) {
      throw new ErrorsApp(401, "Email or Password incorrect ");
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: client.id,
      expiresIn,
    });

    return {
      client,
      token,
    };
  }
}
