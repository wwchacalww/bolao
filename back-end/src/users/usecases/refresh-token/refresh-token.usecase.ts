import { createJWToken } from "../../../@shared/utils/create-jwtoken";
import { UserRepository } from "../../repository/prisma/users.repository";

export class RefreshTokenUseCase {
  async execute(user_id: string, refresh_token: string) {
    const repository = new UserRepository();
    const checkRefreshTokenIsValid = await repository.checkRefreshTokenIsValid(
      user_id,
      refresh_token
    );
    if (!checkRefreshTokenIsValid) {
      throw new Error("Token inválido");
    }

    const user = await repository.findById(user_id);

    await repository.invalidateRefreshToken(refresh_token);

    const refreshToken = await repository.createRefreshToken(user_id);

    const tokenInput = {
      id: user.id,
      email: user.email,
    };
    const token = createJWToken(tokenInput);

    return {
      token,
      refresh_token,
    };
  }
}
