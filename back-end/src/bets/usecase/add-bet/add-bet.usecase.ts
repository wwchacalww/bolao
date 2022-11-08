type InputAddBetDTO = {
  game_id: string;
  player_id: string;
  bet: string;
};

export type OutputBet = {
  id: string;
  player: {
    id: string;
    name: string;
  };
  game: {
    played_at: string;
    first_country: {
      id: string;
      name: string;
      slug: string;
    };
    second_country: {
      id: string;
      name: string;
      slug: string;
    };
    bet: string;
  };
};

export class AddBetUsecase {
  async execute({
    game_id,
    player_id,
    bet,
  }: InputAddBetDTO): Promise<OutputBet> {}
}
