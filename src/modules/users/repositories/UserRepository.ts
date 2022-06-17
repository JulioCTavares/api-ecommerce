import { prisma } from "../../../database/prisma";
import { CreateUserDto } from "../dtos/create-user.dto";
import { User } from "../entities/User";
import IUsersRepository from "../interfaces/IUserRepository";

export class UsersRepository implements IUsersRepository {
  public async create({ email, passwordDto }: CreateUserDto): Promise<User> {
    const user = await prisma.user.create({
      data: {
        email,
        password: passwordDto,
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
