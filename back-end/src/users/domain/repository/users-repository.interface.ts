import { User } from "../entities/user";

export interface UsersRepositoryInterface {
  findByEmail(email: string): Promise<User | undefined>;
  createRefreshToken(user_id: string): Promise<string>;
  checkRefreshTokenIsValid(user_id: string, token: string): Promise<boolean>;
  invalidateRefreshToken(token: string): Promise<void>;
}
