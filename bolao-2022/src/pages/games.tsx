import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { GameDone } from "../components/GameDone";
import { GameProccess } from "../components/GameProccess";
import { api } from "../services/api-client";

type GameProps = {
  id: string;
  played_at: string;
  first_slug: string;
  first_flag: string;
  second_slug: string;
  second_flag: string;
  match_score: string;
  result: string;
  status: string;
};

export function Games() {
  const { user } = useContext(AuthContext);
  const { "bolao.token": token } = parseCookies();

  if (!token) {
    return <Navigate to={"/"} />;
  }

  const [games, setGames] = useState<GameProps[]>();

  useEffect(() => {
    api
      .get("games/games")
      .then((response) => {
        setGames(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header
        name={user?.email || ""}
        avatarUrl="https://logospng.org/download/copa-do-mundo-qatar-2022/logo-copa-do-mundo-qatar-2022-256.png"
      />
      <div className="py-4 flex flex-col align-middle items-center">
        <Title text={"JOGOS"} type={1} />

        {games?.map((game) => {
          if (game.status === "concluído") {
            return (
              <GameDone
                key={game.id}
                first_slug={game.first_slug}
                first_flag={game.first_flag}
                second_flag={game.second_flag}
                second_slug={game.second_slug}
                played_at={game.played_at}
                match_score={game.match_score}
                result={game.result}
                status={game.status}
              />
            );
          } else {
            return (
              <GameProccess
                key={game.id}
                id={game.id}
                first_slug={game.first_slug}
                first_flag={game.first_flag}
                second_flag={game.second_flag}
                second_slug={game.second_slug}
                played_at={game.played_at}
                match_score={game.match_score}
                result={game.result}
                status={game.status}
              />
            );
          }
        })}
      </div>

      <div className="flex flex-col items-center mb-2 gap-3"></div>
    </>
  );
}
