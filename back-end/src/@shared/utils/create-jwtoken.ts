import { sign } from "jsonwebtoken";

type UserJWTInput = {
  id: string;
  name: string;
  email: string;
};

export function createJWToken({ id, name, email }: UserJWTInput): string {
  return sign(
    {
      id,
      name,
      email,
    },
    "PUT_JWT_SECRET_IN_HERE",
    {
      subject: email,
      expiresIn: 30, // 12 hours
    }
  );
}
