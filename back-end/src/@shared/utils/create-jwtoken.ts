import { sign } from "jsonwebtoken";

type UserJWTInput = {
  id: string;
  email: string;
};

export function createJWToken({ id, email }: UserJWTInput): string {
  return sign(
    {
      id,
      email,
    },
    "PUT_JWT_SECRET_IN_HERE",
    {
      subject: email,
      expiresIn: 3600 * 12, // 12 hours
    }
  );
}
