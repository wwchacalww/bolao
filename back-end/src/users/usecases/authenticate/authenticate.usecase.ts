import { createJWToken } from "../../../@shared/utils/create-jwtoken";
import { compare } from "bcrypt";
import { UserRepository } from "../../repository/prisma/users.repository";

export type AuthenticateInputDTO = {
  email: string;
  password: string;
};

export type PayloadOutputDTO = {
  id: string;
  email: string;
};

export class AuthenticateUseCase {
  async execute({ email, password }: AuthenticateInputDTO) {
    const repository = new UserRepository();
    const user = await repository.findByEmail(email);
    if (!user) {
      throw new Error("E-mail or password invalid");
    }

    const passwordMath = await compare(password, user.password);

    if (!passwordMath) {
      throw new Error("E-mail or password invalid");
    }

    const tokenInput = {
      id: user.id,
      email: user.email,
    };

    const token = createJWToken(tokenInput);

    const refreshToken = await repository.createRefreshToken(user.id);

    return {
      token,
      refreshToken,
    };
  }
}
