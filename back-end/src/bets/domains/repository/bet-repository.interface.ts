import { Bet } from "../entity/bet";

export interface BetsRepositoryInterface {
  add(bet: Bet): Promise<void>;
  all(): Promise<Bet[]>;
  listBetsOnPlayer(player_id: string): Promise<Bet[]>;
  listBetsOnGame(game_id: string): Promise<Bet[]>;
}
