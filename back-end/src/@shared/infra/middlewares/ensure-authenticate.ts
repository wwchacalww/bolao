import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../../../users/repository/prisma/users.repository";

type PayLoadDTO = {
  id: string;
  email: string;
};

export async function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({
      message: "Token not provided",
    });
  }

  const [, token] = authorization.split(" ");

  try {
    const { id, email } = verify(token, "PUT_JWT_SECRET_IN_HERE") as PayLoadDTO;
    const usersRepository = new UserRepository();
    const user = await usersRepository.findById(id);

    if (!user) {
      console.log("User not found");
      return response.status(401).json({
        message: "Invalid token",
      });
    }

    request.user_id = id;
    request.user_email = email;
    next();
  } catch (error: any) {
    return response.status(401).json({
      message: error.message,
    });
  }
}
