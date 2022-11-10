import { Request, Response } from "express";
import { FindByIdPlayerUsecase } from "./find-by-id.usecase";

export class FindByIdPlayerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { player_id } = request.params;
    const usecase = new FindByIdPlayerUsecase();

    try {
      const player = await usecase.execute(player_id);
      return response.status(200).json(player.toJSON());
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }
}
