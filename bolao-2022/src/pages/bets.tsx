import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import catarFlag from "../assets/flags/Catar.svg";
import equadorFlag from "../assets/flags/Equador.svg";
import senegalFlag from "../assets/flags/Senegal.svg";
import holFlag from "../assets/flags/Holanda.svg";
import ingFlag from "../assets/flags/Inglaterra.svg";
import iraFlag from "../assets/flags/Ira.svg";
import usaFlag from "../assets/flags/USA.svg";
import galFlag from "../assets/flags/PaisDeGales.svg";
import { Palpite } from "../components/Palpite";
import { useState } from "react";

type betProps = {
  game: number;
  date: string;
  first_slug: string;
  first_flag: string;
  first_country: number;
  second_slug: string;
  second_flag: string;
  second_country: number;
};

type betsProps = {
  user_id: string;
  group: string;
  bets: betProps[];
};

const apostas: betsProps[] = [
  {
    user_id: "chacal",
    group: "GRUPO A",
    bets: [
      {
        game: 1,
        date: "Dom 20/11 13:00",
        first_slug: "CAT",
        first_flag: catarFlag,
        first_country: 99,
        second_slug: "EQU",
        second_flag: equadorFlag,
        second_country: 99,
      },
      {
        game: 2,
        date: "Seg 21/11 13:00",
        first_slug: "SEN",
        first_flag: senegalFlag,
        first_country: 99,
        second_slug: "HOL",
        second_flag: holFlag,
        second_country: 99,
      },
      {
        game: 3,
        date: "Sex 25/11 10:00",
        first_slug: "CAT",
        first_flag: catarFlag,
        first_country: 99,
        second_slug: "SEN",
        second_flag: senegalFlag,
        second_country: 99,
      },
      {
        game: 4,
        date: "Sex 25/11 13:00",
        first_slug: "HOL",
        first_flag: holFlag,
        first_country: 99,
        second_slug: "EQU",
        second_flag: equadorFlag,
        second_country: 99,
      },
      {
        game: 5,
        date: "Seg 29/11 12:00",
        first_slug: "HOL",
        first_flag: holFlag,
        first_country: 99,
        second_slug: "CAT",
        second_flag: catarFlag,
        second_country: 99,
      },
      {
        game: 6,
        date: "Seg 29/11 12:00",
        first_slug: "EQU",
        first_flag: equadorFlag,
        first_country: 99,
        second_slug: "SEN",
        second_flag: senegalFlag,
        second_country: 99,
      },
    ],
  },
  {
    user_id: "chacal",
    group: "GRUPO B",
    bets: [
      {
        date: "Seg 21/11 10:00",
        first_country: 99,
        first_slug: "ING",
        first_flag: ingFlag,
        second_country: 99,
        second_slug: "IRA",
        second_flag: iraFlag,
        game: 1,
      },
      {
        date: "Seg 21/11 16:00",
        first_country: 99,
        first_slug: "EUA",
        first_flag: usaFlag,
        second_country: 99,
        second_slug: "GAL",
        second_flag: galFlag,
        game: 2,
      },
      {
        date: "Seg 25/11 07:00",
        first_country: 99,
        first_slug: "GAL",
        first_flag: galFlag,
        second_country: 99,
        second_slug: "IRA",
        second_flag: iraFlag,
        game: 3,
      },
      {
        date: "Sex 25/11 16:00",
        first_country: 99,
        first_slug: "ING",
        first_flag: ingFlag,
        second_country: 99,
        second_slug: "EUA",
        second_flag: usaFlag,
        game: 4,
      },
      {
        date: "Ter 29/11 16:00",
        first_country: 99,
        first_slug: "IRA",
        first_flag: iraFlag,
        second_country: 99,
        second_slug: "EUA",
        second_flag: usaFlag,
        game: 5,
      },
      {
        date: "Ter 29/11 16:00",
        first_country: 99,
        first_slug: "GAL",
        first_flag: galFlag,
        second_country: 99,
        second_slug: "ING",
        second_flag: ingFlag,
        game: 6,
      },
    ],
  },
];

export function Bets() {
  const { id } = useParams<{ id: string; games: string }>();
  const [bets, setBets] = useState<betsProps[]>(apostas);

  console.log(senegalFlag);
  const navigate = useNavigate();

  const [saveButtonDisable, setSaveButtonDisable] = useState(true);
  const [nextButtonDisable, setNextButtonDisable] = useState(true);

  const handleGetValue = (
    target: any,
    game: number,
    team: "first" | "second",
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(target.value);
    const bet = parseInt(target.value);
    if (!Number.isInteger(bet) || bet > 20) {
      target.value = "";
    } else {
      if (team === "first") {
        bets[0].bets[game - 1].first_country = bet;
      }

      if (team === "second") {
        bets[0].bets[game - 1].second_country = bet;
      }
      setBets(bets);
      let disable = false;
      bets[0].bets.forEach((bet) => {
        if (bet.first_country === 99) {
          disable = true;
        }
        if (bet.second_country === 99) {
          disable = true;
        }
      });
      setSaveButtonDisable(disable);
    }
  };

  const handleSaveGroupBets = () => {
    console.log(bets);
    setNextButtonDisable(false);
  };

  return (
    <div>
      <Header name={id as any} avatarUrl="https://github.com/wwchacalww.png" />
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
                  date={bet.date}
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
    </div>
  );
}
