import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { CaretUp } from "phosphor-react";
import { Partida } from "../components/Partida";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";

type PlayerProps = {
  id: string;
  name: string;
  score: number;
};

type partidaProps = {
  played_at: string;
  first_slug: string;
  first_flag: string;
  second_slug: string;
  second_flag: string;
  bet: string;
  result?: string;
};

type OutputListBestByPlayer = {
  player: {
    id: string;
    name: string;
    score: number;
  };
  bets: partidaProps[];
};

export function Player() {
  const { user_id } = useParams<{ user_id: string }>();
  const [player, setPlayer] = useState<PlayerProps>();
  const [bets, setBets] = useState<partidaProps[]>();

  useEffect(() => {
    api
      .get<OutputListBestByPlayer>(`players/bets/${user_id}`)
      .then((response) => {
        const betsByPlayer = response.data;
        setBets(betsByPlayer.bets);
        setPlayer(betsByPlayer.player);
      });
  }, []);
  return (
    <>
      <Header
        name="COPA 2022"
        avatarUrl="https://logospng.org/download/copa-do-mundo-qatar-2022/logo-copa-do-mundo-qatar-2022-256.png"
      />
      <div className="py-4 flex flex-col align-middle items-center">
        <Title text="PARTICIPANTES" type={1} />
      </div>

      <div className="flex flex-col items-center mb-2">
        <div className="flex flex-col w-80 py-2 rounded-lg items-center justify-center bg-gray-900">
          <div className="flex flex-row w-full px-4 items-center">
            <img
              className="h-12 w-12 rounded-full"
              src={`/src/assets/fotos/${player?.id}.jpg`}
            />

            <div className="flex flex-col pl-4 gap-1">
              <strong className="text-white font-bold text-base">
                {player?.name}
              </strong>
              <span className="font-semibold text-gray-400 text-sm">
                {player?.score} pontos
              </span>
            </div>

            <div className="flex justify-end w-28 text-3xl font-bold">
              <strong className="text-white"># 1º</strong>
            </div>
            <div className="flex justify-center items-center w-10 h-10 ml-2">
              <Link to="/">
                <CaretUp size={32} className="text-gray-400" />
              </Link>
            </div>
          </div>

          {bets?.map((bet) => {
            return (
              <Partida
                key={bet.played_at + bet.first_slug}
                bet={bet.bet}
                played_at={bet.played_at}
                first_flag={bet.first_flag}
                first_slug={bet.first_slug}
                second_flag={bet.second_flag}
                second_slug={bet.second_slug}
                result={bet.result}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
