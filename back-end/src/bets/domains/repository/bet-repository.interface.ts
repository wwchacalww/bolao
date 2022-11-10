import { Bet } from "../entity/bet";

export type InputAddMassBetDTO = {
  player_id: string;
  bets: {
    game_id: string;
    bet: string;
  }[];
};

export interface BetsRepositoryInterface {
  add(bet: Bet): Promise<void>;
  addMassBets(input: InputAddMassBetDTO): Promise<void>;
  all(): Promise<Bet[]>;
  listBetsOnPlayer(player_id: string): Promise<Bet[]>;
  listBetsOnGame(game_id: string): Promise<Bet[]>;
}
