import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { useParams } from "react-router-dom";
import { Partida } from "../components/Partida";

type CountryProp = {
  id: string;
  name: string;
  slug: string;
  group: string;
  flag: string;
}

type GameProp = {
  id: string;
  played_at: string;
  first_country: CountryProp;
  second_country: CountryProp;
  group: string;
  match_score: string;
  status: string;
  result?: string;
}

type PlayerBetProp = {
  id: string;
  name: string;
  score: number;
  bet: string;
}

type GamePlayProp = {
  game: GameProp;
  gameplay: PlayerBetProp[]
}

export function Game() {
  const [gameplay, setGameplay] = useState<GamePlayProp>();
  const { game_id } = useParams<{game_id: string}>();
  useEffect(() => {
    api.get<GamePlayProp>("games/"+game_id).then((response) => {
      setGameplay(response.data);
    });
  }, []);
  console.log(gameplay)
  return (
    <>
      <Header
        name="COPA 2022"
        avatarUrl="https://logospng.org/download/copa-do-mundo-qatar-2022/logo-copa-do-mundo-qatar-2022-256.png"
      />
      <div className="py-4 flex flex-col align-middle items-center">
        <Title text="PARTIDA" type={1} />
      </div>

      <div className="flex flex-col items-center mb-2 gap-3">
        {gameplay && gameplay.game ? (
          <Partida 
            bet={gameplay.game.match_score}
            played_at={gameplay.game.played_at}
            first_flag={gameplay.game.first_country.flag}
            first_slug={gameplay.game.first_country.slug}
            second_flag={gameplay.game.second_country.flag}
            second_slug={gameplay.game.second_country.slug}
            result={gameplay.game.match_score}
          />
        ) :( <> </> )}
        {/* {players ? (
          players.map((player) => {
            return (
              <Player
                key={player.id}
                id={player.id}
                name={player.name}
                score={player.score}
                rank={player.rank}
              />
            );
          })
        ) : (
          <></>
        )} */}

        {gameplay && gameplay.gameplay ? (
          gameplay.gameplay.map(gp => {
            return (
              <>
              {/* Gameplay */}
              <div className="flex flex-col w-80 py-2 rounded-lg items-center justify-center bg-gray-900">
              <div className="flex flex-row w-full px-4 items-center" >
                <img 
                  className="h-12 w-12 rounded-full"
                  src={`/src/assets/fotos/${gp.id}.jpg`}
                />
                <div className="flex flex-col pl-4 gap-1">
                  <strong className="text-white font-bold text-base">
                    {gp.name}
                  </strong>
                  <span className="font-semibold text-gray-400 text-sm">
                    {gp.score} pontos
                  </span>
                </div>
              </div>
              <Partida 
                bet={gp.bet}
                played_at={gameplay.game.played_at}
                first_flag={gameplay.game.first_country.flag}
                first_slug={gameplay.game.first_country.slug}
                second_flag={gameplay.game.second_country.flag}
                second_slug={gameplay.game.second_country.slug}
                result={gameplay.game.match_score}
              />
            </div>
            {/* Fim da gameplay */}
            </>
            )
          })
        ):( <></> )}
      </div>
    </>
  );
}
