import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Player } from "../components/Player";
import { useEffect, useState } from "react";
import { api } from "../services/api";

type playerProps = {
  id: string;
  name: string;
  score: number;
  rank: number;
};

export function Home() {
  const [players, setPlayers] = useState<playerProps[]>();
  useEffect(() => {
    api.get<playerProps[]>("players/with-bets/players").then((response) => {
      setPlayers(response.data);
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

      <div className="flex flex-col items-center mb-2 gap-3">
        {players ? (
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
        )}
      </div>
    </>
  );
}
