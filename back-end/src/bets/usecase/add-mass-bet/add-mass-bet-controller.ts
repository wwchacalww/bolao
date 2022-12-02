import { InputAddMassBetDTO } from "bets/domains/repository/bet-repository.interface";
import { Request, Response } from "express";
import { AddMassBetUsecase } from "./add-mass-bet.usecase";

export class AddMassBetController {
  async handle(request: Request, response: Response): Promise<Response> {
    const usecase = new AddMassBetUsecase();
    const { player_id, bets }: InputAddMassBetDTO = request.body as any;
    await usecase.execute({ player_id, bets });
    return response.status(201).json({ player_id, bets });
  }
}
