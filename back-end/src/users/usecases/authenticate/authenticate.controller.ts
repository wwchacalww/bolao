import { Request, Response } from "express";
import { AuthenticateUseCase } from "./authenticate.usecase";

export class AuthenticateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authenticate = new AuthenticateUseCase();
    try {
      const token = await authenticate.execute({ email, password });
      return response.status(200).json(token);
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }
}
