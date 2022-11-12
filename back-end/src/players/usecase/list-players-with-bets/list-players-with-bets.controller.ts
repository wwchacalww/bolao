import { Request, Response } from "express";
import { ListPlayersWithBetsUsecase } from "./list-players-with-bets.usecase";

export class ListPlayersWithBetsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const usecase = new ListPlayersWithBetsUsecase();
    try {
      const result = await usecase.execute();
      return response.status(200).json(result);
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }
}
