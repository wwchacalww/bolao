import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Player } from "../components/Player";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Partida } from "../components/Partida";
import { Link } from "react-router-dom";

type playerProps = {
  id: string;
  name: string;
  score: number;
  rank: number;
};

type jogoProps = {
  id: string
  played_at: string
  first_slug: string
  first_flag: string
  second_slug: string
  second_flag: string
  match_score: string
  result?: string
  group?: string
  status: string
};

const games = await api.get<jogoProps[]>("/games/games");
const jogos = games.data;
export function Cartaxo() {
  const [players, setPlayers] = useState<playerProps[]>();
  useEffect(() => {
    api.get<playerProps[]>("players/with-bets/players/CARTAXO").then((response) => {
      setPlayers(response.data);
    });
  }, []);
  return (
    <>
      <Header
        name="COPA 2026"
        avatarUrl="/src/assets/imgs/2026_FIFA_World_Cup_logo.svg"
      />
      <div className="py-4 flex flex-col align-middle items-center">
        <Title text="PARTICIPANTES" type={1} />
      </div>

      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-5 gap-2">
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

      <div className="py-4 flex flex-col align-middle items-center">
        <Title text="JOGOS" type={1} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
        <div className="flex flex-col items-center mb-2">
          {jogos?.map((bet, ind) => {
            if (ind < 12) {
              return (
                <Link to={`/game/cartaxo/${bet.id}`} className="rounded-lg bg-gray-800 mb-1 px-1">
                  <Partida
                    key={bet.id + bet.first_slug}
                    bet={bet.result ? bet.result : "0-0"}
                    played_at={bet.played_at}
                    first_flag={bet.first_flag}
                    first_slug={bet.first_slug}
                    second_flag={bet.second_flag}
                    second_slug={bet.second_slug}
                    result={""}
                    group={bet.group}
                  />
                </Link>
              );
            }
          })}
        </div>
        <div className="flex flex-col items-center mb-2 mx-4">
          {jogos?.map((bet, ind) => {
            if (ind > 11 && ind < 24) {
              return (
                <Link to={`/game/cartaxo/${bet.id}`} className="rounded-lg bg-gray-800 mb-1 px-1">
                  <Partida
                    key={bet.id + bet.first_slug}
                    bet={bet.result ? bet.result : "0-0"}
                    played_at={bet.played_at}
                    first_flag={bet.first_flag}
                    first_slug={bet.first_slug}
                    second_flag={bet.second_flag}
                    second_slug={bet.second_slug}
                    result={""}
                    group={bet.group}
                  />
                </Link>
              );
            }
          })}
        </div>
        <div className="flex flex-col items-center mb-2 mx-4">
          {jogos?.map((bet, ind) => {
            if (ind > 23 && ind < 36) {
              return (
                <Link to={`/game/cartaxo/${bet.id}`} className="rounded-lg bg-gray-800 mb-1 px-1">
                  <Partida
                    key={bet.id + bet.first_slug}
                    bet={bet.result ? bet.result : "0-0"}
                    played_at={bet.played_at}
                    first_flag={bet.first_flag}
                    first_slug={bet.first_slug}
                    second_flag={bet.second_flag}
                    second_slug={bet.second_slug}
                    result={""}
                    group={bet.group}
                  />
                </Link>
              );
            }
          })}
        </div>
        <div className="flex flex-col items-center mb-2 mx-4">
          {jogos?.map((bet, ind) => {
            if (ind > 35 && ind < 48) {
              return (
                <Link to={`/game/cartaxo/${bet.id}`} className="rounded-lg bg-gray-800 mb-1 px-1">
                  <Partida
                    key={bet.id + bet.first_slug}
                    bet={bet.result ? bet.result : "0-0"}
                    played_at={bet.played_at}
                    first_flag={bet.first_flag}
                    first_slug={bet.first_slug}
                    second_flag={bet.second_flag}
                    second_slug={bet.second_slug}
                    result={""}
                    group={bet.group}
                  />
                </Link>
              );
            }
          })}
        </div>
        <div className="flex flex-col items-center mb-2 mx-4">
          {jogos?.map((bet, ind) => {
            if (ind > 47 && ind < 60) {
              return (
                <Link to={`/game/cartaxo/${bet.id}`} className="rounded-lg bg-gray-800 mb-1 px-1">
                  <Partida
                    key={bet.id + bet.first_slug}
                    bet={bet.result ? bet.result : "0-0"}
                    played_at={bet.played_at}
                    first_flag={bet.first_flag}
                    first_slug={bet.first_slug}
                    second_flag={bet.second_flag}
                    second_slug={bet.second_slug}
                    result={""}
                    group={bet.group}
                  />
                </Link>
              );
            }
          })}
        </div>
        <div className="flex flex-col items-center mb-2">
          {jogos?.map((bet, ind) => {
            if (ind > 59 && ind < 72) {
              return (
                <Link to={`/game/cartaxo/${bet.id}`} className="rounded-lg bg-gray-800 mb-1 px-1">
                  <Partida
                    key={bet.id + bet.first_slug}
                    bet={bet.result ? bet.result : "0-0"}
                    played_at={bet.played_at}
                    first_flag={bet.first_flag}
                    first_slug={bet.first_slug}
                    second_flag={bet.second_flag}
                    second_slug={bet.second_slug}
                    result={""}
                    group={bet.group}
                  />
                </Link>
              );
            }
          })}
        </div>
      </div>

    </>
  );
}
