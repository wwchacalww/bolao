import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-user.usecase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const usecase = new CreateUserUseCase();
    try {
      const user = await usecase.execute({
        name,
        email,
        password,
      });

      return response.status(201).json(user);
    } catch (err: any) {
      return response.status(400).json(err.errors);
    }
  }
}
