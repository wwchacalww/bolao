import { Request, Response } from "express";
import { AddCountryUsecase } from "./add-country.usecase";

export class AddCountryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const usecase = new AddCountryUsecase();
    const { name, slug, flag, group } = request.body;
    try {
      const result = await usecase.execute({ name, slug, flag, group });
      return response.status(201).json(result);
    } catch (err: any) {
      return response.status(401).json(err.message);
    }
  }
}
