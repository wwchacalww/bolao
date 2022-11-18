import { Request, Response } from "express";
import { RefreshTokenUseCase } from "./refresh-token.usecase";

export class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { refresh_token } = request.body;
    const { user_id } = request;

    const refreshTokenUsecase = new RefreshTokenUseCase();

    try {
      const result = await refreshTokenUsecase.execute(user_id, refresh_token);
      return response.status(200).json(result);
    } catch (err: any) {
      return response.status(400).json(err.errors);
    }
  }
}
