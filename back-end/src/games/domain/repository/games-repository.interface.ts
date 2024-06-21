import { Game } from "../entity/game";

export type GameplayProp = {
  id: string;
  name: string;
  score: number;
  bet: string;
}

export type OutputFindByIdGame = {
  id: string;
  played_at: string;
  first_country_id: string;
  second_country_id: string;
  match_score?: string;
  result?: string;
  status?: string;
  gameplays?: GameplayProp[];
};

export interface GamesRepositoryInterface {
  add(game: Game): Promise<void>;
  findById(id: string): Promise<OutputFindByIdGame>;
  all(): Promise<Game[]>;
  changeMatchScore(game: Game): Promise<void>;
  changeGameTime(): Promise<void>;
  gamesAndResults(): Promise<Game[]>;
}
