import { Request, Response } from "express";
import { FindByIdGameUsecase } from "../../../games/usecase/find-by-id/find-by-id-game.usecase";
import { FindByIdPlayerUsecase } from "../../../players/usecase/find-by-id/find-by-id.usecase";
import { AddBetUsecase } from "./add-bet.usecase";

export class AddBetController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { bet, player_id, game_id } = request.body;
    try {
      const findByIdGame = new FindByIdGameUsecase();
      const findByIdPlayer = new FindByIdPlayerUsecase();
      const usecase = new AddBetUsecase();
      const game = await findByIdGame.execute(game_id);
      const player = await findByIdPlayer.execute(player_id);
      const result = await usecase.execute({
        player,
        game,
        bet,
      });

      return response.status(201).json(result);
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }
}
