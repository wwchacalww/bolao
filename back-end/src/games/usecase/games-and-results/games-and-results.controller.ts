import { Request, Response } from "express";
import { GamesAndResultsUsecase } from "./games-and-results.usecase";

export class GamesAndResultsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const usecase = new GamesAndResultsUsecase();
    try {
      const result = await usecase.execute();
      return response.status(200).json(result);
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }
}
