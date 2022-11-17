import { Player } from "../entities/player";

type partidaProps = {
  played_at: string;
  first_slug: string;
  first_flag: string;
  second_slug: string;
  second_flag: string;
  bet: string;
  result?: string;
};

export type OutputListBestByPlayer = {
  player: {
    id: string;
    name: string;
    score: number;
  };
  bets: partidaProps[];
};
export interface PlayersRepositoryInterface {
  add(player: Player): Promise<void>;
  findById(id: string): Promise<Player>;
  all(): Promise<Player[]>;
  listBetsByPlayer(id: string): Promise<OutputListBestByPlayer>;
  listPlayersWithBets(): Promise<Player[]>;
  changeScore(id: string, score: number): Promise<void>;
}
