import { Game } from "../entity/game";

export interface GamesRepositoryInterface {
  add(game: Game): Promise<void>;
}
