import { prisma } from "../../../@shared/db/prisma.client";
import { hash } from "bcrypt";
import { User } from "../../domain/entities/user";
import { UsersRepositoryInterface } from "../../domain/repository/users-repository.interface";
import { RefreshToken } from "../../domain/entities/refresh-token";

export class UserRepository implements UsersRepositoryInterface {
  async findByEmail(email: string): Promise<User | undefined> {
    const result = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (result) {
      return new User({
        id: result.id,
        name: result.name,
        email: result.email,
        password: result.password,
      });
    }

    return undefined;
  }

  async create(entity: User): Promise<User> {
    const { id, name, password: senha, email } = entity;
    const password = await hash(senha, 10);
    await prisma.users.create({
      data: {
        id,
        name,
        email,
        password,
      },
    });

    return entity;
  }

  async update(entity: User): Promise<User> {
    const { id, password } = entity;
    const passwordHash = await hash(password, 10);
    await prisma.users.update({
      where: {
        id,
      },
      data: {
        password: passwordHash,
      },
    });

    return entity;
  }

  async delete(id: string): Promise<void> {
    await prisma.users.delete({ where: { id } });
  }

  async findById(id: string): Promise<User> {
    const user = await prisma.users.findUnique({
      where: { id },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return new User({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }

  async findAll(): Promise<User[]> {
    const result = await prisma.users.findMany();
    return result.map(
      (user) =>
        new User({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
    );
  }

  async createRefreshToken(user_id: string): Promise<string> {
    const result = await prisma.users.findUnique({
      where: {
        id: user_id,
      },
    });

    const user = new User({
      id: result.id,
      name: result.name,
      email: result.email,
      password: result.password,
    });

    if (!result) {
      throw new Error("Usuário inválido");
    }

    const refresh_token = new RefreshToken({ user });

    await prisma.refreshTokens.deleteMany({
      where: {
        user_id,
      },
    });

    await prisma.refreshTokens.create({
      data: {
        id: refresh_token.id,
        token: refresh_token.token,
        user_id: refresh_token.user.id,
        created_at: refresh_token.created_at,
        expires_at: refresh_token.expires_at,
      },
    });

    return refresh_token.token;
  }

  async checkRefreshTokenIsValid(
    user_id: string,
    token: string
  ): Promise<boolean> {
    const result = await prisma.refreshTokens.findFirst({
      where: {
        user_id,
        token,
        expires_at: {
          gte: new Date(),
        },
      },
    });

    return !!result;
  }

  async invalidateRefreshToken(token: string): Promise<void> {
    await prisma.refreshTokens.delete({
      where: {
        token,
      },
    });
  }
}
