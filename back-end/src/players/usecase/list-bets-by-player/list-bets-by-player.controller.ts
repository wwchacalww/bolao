import { Request, Response } from "express";
import { ListBetsByPlayerUsecase } from "./list-bets-by-player.usecase";

export class ListBetsByPlayerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const usecase = new ListBetsByPlayerUsecase();
    const { player_id } = request.params;

    try {
      const bets = await usecase.execute(player_id);
      return response.status(200).json(bets);
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }
}
