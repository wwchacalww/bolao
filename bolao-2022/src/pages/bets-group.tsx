import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Palpite } from "../components/Palpite";
import { Title } from "../components/Title";
import { api } from "../services/api";

type betProps = {
  game_id: string;
  game: number;
  played_at: string;
  first_slug: string;
  first_flag: string;
  first_country: number;
  second_slug: string;
  second_flag: string;
  second_country: number;
};

type betsProps = {
  group: string;
  bets: betProps[];
};

type inputBetsDTO = {
  player_id: string;
  bets: {
    game_id: string;
    bet: string;
  }[];
};

type PlayerProps = {
  id: string;
  name: string;
  score: number;
};

const games = await api.get<betsProps[]>("/games/all");

const apostas = games.data;

export function BetsGroup() {
  const [bets, setBets] = useState<betsProps[]>(apostas);
  const [saveButtonDisable, setSaveButtonDisable] = useState(true);
  const [player, setPlayer] = useState<PlayerProps>();
  const { user_id } = useParams<{ user_id: string }>();
  const navigate = useNavigate();

  api.get<PlayerProps>(`players/${user_id}`).then((response) => {
    setPlayer(response.data);
  });

  const handleGetValue = (
    target: any,
    group_number: number,
    game: number,
    team: "first" | "second",
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(target.value);
    const bet = parseInt(target.value);
    if (!Number.isInteger(bet) || bet > 20) {
      setValue("");
    } else {
      if (team === "first") {
        bets[group_number].bets[game - 1].first_country = bet;
      }

      if (team === "second") {
        bets[group_number].bets[game - 1].second_country = bet;
      }
      setBets(bets);
      let disable = false;

      bets.forEach((group) => {
        group.bets.forEach((bet) => {
          if (bet.first_country === 99) {
            disable = true;
          }
          if (bet.second_country === 99) {
            disable = true;
          }
        });
      });
      // bets[0].bets.forEach((bet) => {
      //   if (bet.first_country === 99) {
      //     disable = true;
      //   }
      //   if (bet.second_country === 99) {
      //     disable = true;
      //   }
      // });

      setSaveButtonDisable(disable);
    }
  };

  const handleSaveGroupBets = async () => {
    const inputBets: inputBetsDTO = {
      player_id: player?.id || "",
      bets: [],
    };

    bets.forEach((group) => {
      group.bets.map((bet) => {
        const aposta = {
          game_id: bet.game_id,
          bet: `${bet.first_country}-${bet.second_country}`,
        };
        inputBets.bets.push(aposta);
      });
    });
    const response = await api.post("/players/bets", {
      player_id: inputBets.player_id,
      bets: inputBets.bets,
    });

    console.log(response.status);
  };

  return (
    <>
      <Header
        name={player?.name || ""}
        avatarUrl="https://github.com/wwchacalww.png"
      />
      <div className="py-4 flex flex-col align-middle items-center">
        <Title text="FASE DE GRUPOS" type={1} />
      </div>
      {apostas.map((aposta) => {
        return (
          <div key={aposta.group} className="mb-6">
            <strong className="text-gray-400 text-sm mt-2 mx-5">
              {aposta.group}
            </strong>
            {aposta.bets.map((bet) => {
              return (
                <Palpite
                  key={bet.game}
                  date={bet.played_at}
                  group={aposta.group}
                  first_slug={bet.first_slug}
                  first_flag={bet.first_flag}
                  first_country={bet.first_country}
                  second_slug={bet.second_slug}
                  second_flag={bet.second_flag}
                  second_country={bet.second_country}
                  first_get_value={handleGetValue}
                  game={bet.game}
                />
              );
            })}
          </div>
        );
      })}

      <div className="flex flex-col align-middle justify-center items-center my-6 gap-2">
        <button
          className="h-10 w-80 bg-green-500 text-black font-bold rounded-lg disabled:bg-green-300"
          onClick={handleSaveGroupBets}
          disabled={saveButtonDisable}
        >
          Salvar
        </button>
      </div>
    </>
  );
}
