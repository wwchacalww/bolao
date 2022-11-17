import { Game } from "../entity/game";

export type OutputFindByIdGame = {
  id: string;
  played_at: string;
  first_country_id: string;
  second_country_id: string;
  match_score?: string;
  result?: string;
  status?: string;
};

export interface GamesRepositoryInterface {
  add(game: Game): Promise<void>;
  findById(id: string): Promise<OutputFindByIdGame>;
  all(): Promise<Game[]>;
  changeMatchScore(game: Game): Promise<void>;
}
