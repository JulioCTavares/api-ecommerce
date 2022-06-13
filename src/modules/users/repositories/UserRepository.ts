import { prisma } from "../../../database/prisma";
import { CreateUserDto } from "../dtos/create-user.dto";
import IUsersInterface from "../interfaces/IUserInterface";
import { User } from "../model/User";

export class UsersRepository implements IUsersInterface {
  public async create({ email, password }: CreateUserDto): Promise<User> {
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    return user;
  }

  public async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  public async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  public async updateEmail(data: User, email: string): Promise<User | null> {
    const user = await prisma.user.update({
      where: {
        id: data.id,
      },
      data: {
        email,
      },
    });

    return user;
  }

  public async delete(user: User): Promise<void> {
    await prisma.user.delete({
      where: {
        email: user.email,
      },
    });
  }
}
