import { Request, Response } from "express";
import { MeUsecase } from "./me.usecase";

export class MeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;
    const meUsecase = new MeUsecase();
    try {
      const result = await meUsecase.execute(user_id);
      return response.status(200).json(result);
    } catch (err: any) {
      return response.status(400).json(err.errors);
    }
  }
}
