import { Request, Response } from "express";
import { ChangeGameTimeUsecase } from "./change-game-time.usecase";

export class ChangeGameTimeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const usecase = new ChangeGameTimeUsecase();
    try {
      const result = await usecase.execute();
      return response.status(200).json(result);
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }
}
