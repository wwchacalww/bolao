import { Request, Response } from "express";
import { AddPlayerUsecase } from "./add-player.usecase";

export class AddPlayerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, group } = request.body;
    const usecase = new AddPlayerUsecase();
    try {
      const player = await usecase.execute(name, group);
      return response.status(201).json(player);
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }
}
