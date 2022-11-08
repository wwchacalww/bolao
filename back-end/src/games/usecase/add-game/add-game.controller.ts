import { FindByIdCountryUsecase } from "../../../countries/usecase/find-by-id/find-by-id-country.usecase";
import { Request, Response } from "express";
import { AddGameUsecase } from "./add-game.usecase";

export class AddGameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { played_at, first_country_id, second_country_id } = request.body;
    const findByIdCountryUsecase = new FindByIdCountryUsecase();
    const usecase = new AddGameUsecase();
    try {
      const first_country = await findByIdCountryUsecase.execute(
        first_country_id
      );
      const second_country = await findByIdCountryUsecase.execute(
        second_country_id
      );
      const result = await usecase.execute({
        played_at,
        first_country,
        second_country,
      });

      return response.status(201).json(result);
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }
}
