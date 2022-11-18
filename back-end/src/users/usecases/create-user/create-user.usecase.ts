import { UserRepository } from "../../repository/prisma/users.repository";
import { User } from "../../domain/entities/user";

export interface CreateUserInputDTO {
  name: string;
  email: string;
  password: string;
}

export interface CreateUserOutputDTO {
  id: string;
  name: string;
  email: string;
}

export class CreateUserUseCase {
  public async execute(
    props: CreateUserInputDTO
  ): Promise<CreateUserOutputDTO> {
    const repository = new UserRepository();
    const userExists = await repository.findByEmail(props.email);
    if (userExists) {
      throw new Error("Usuário já existe");
    }

    const entity = new User(props);
    const user = await repository.create(entity);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
