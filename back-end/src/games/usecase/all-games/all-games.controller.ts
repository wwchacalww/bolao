import { Request, Response } from "express";
import { AllGamesUsecase } from "./all-games.usecase";

export class AllGamesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const usecase = new AllGamesUsecase();
      const games = await usecase.execute();

      return response.status(200).json(games);
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }
}
