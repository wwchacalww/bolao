import { UserRepository } from "../../repository/prisma/users.repository";

type MeOutput = {
  email: string;
};

export class MeUsecase {
  async execute(user_id: string): Promise<MeOutput> {
    const repository = new UserRepository();
    const user = await repository.findById(user_id);

    if (!user) {
      throw new Error("usuário não encontrado");
    }

    return {
      email: user.email,
    };
  }
}
