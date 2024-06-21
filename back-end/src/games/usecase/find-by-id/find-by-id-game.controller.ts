import { Request, Response } from "express";
import { FindByIdGameUsecase } from "./find-by-id-game.usecase";

export class FindByIdGameController{
  async handle(req:Request, res: Response): Promise<Response>{
    const usecase = new FindByIdGameUsecase();
    const {game_id} = req.params;
    try {
      const game = await usecase.execute(game_id);
      return res.status(200).json(game);
      } catch (err: any) {
      return res.status(400).json(err.message);
    }
  }
}