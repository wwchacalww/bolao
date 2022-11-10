import { BetsRepository } from "../../repository/prisma/bets.repository";
import { InputAddMassBetDTO } from "../../domains/repository/bet-repository.interface";

export class AddMassBetUsecase {
  async execute(prop: InputAddMassBetDTO): Promise<void> {
    const repository = new BetsRepository();

    await repository.addMassBets(prop);
  }
}
