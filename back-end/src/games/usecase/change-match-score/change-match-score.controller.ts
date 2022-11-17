import { Request, Response } from "express";
import {
  ChangeMatchScoreUsecase,
  InputChangeMatchScore,
} from "./change-match-score.usecase";

export class ChangeMatchScoreController {
  async handle(request: Request, response: Response) {
    const { game_id, match_score, status } =
      request.body as InputChangeMatchScore;

    const usecase = new ChangeMatchScoreUsecase();

    try {
      await usecase.execute({ game_id, match_score, status });
      return response.status(200).json({ message: "Placar Atualizado" });
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }
}
