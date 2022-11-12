import { Country } from "../../../countries/domain/entity/Country";
import { findCountryById } from "../../../countries/domain/utils/find-country-by-id";
import { prisma } from "../../../@shared/db/prisma.client";
import { Player } from "../../domain/entities/player";
import {
  OutputListBestByPlayer,
  PlayersRepositoryInterface,
} from "../../domain/repository/players-repository.interface";
import { notEqual } from "assert";

type partidaProps = {
  played_at: string;
  first_slug: string;
  first_flag: string;
  second_slug: string;
  second_flag: string;
  bet: string;
  result?: string;
};

export class PlayersRepository implements PlayersRepositoryInterface {
  async add(player: Player): Promise<void> {
    await prisma.players.create({
      data: {
        id: player.id,
        name: player.name,
        score: player.score,
      },
    });
  }

  async findById(id: string): Promise<Player> {
    const player = await prisma.players.findFirst({
      where: { id },
    });
    if (!player) {
      throw new Error("Participante não encontrado");
    }

    return new Player({
      id: player.id,
      name: player.name,
      score: player.score,
    });
  }

  async all(): Promise<Player[]> {
    const players = await prisma.players.findMany();
    if (!players) {
      throw new Error("Nenhum participante listado");
    }

    return players.map((player) => {
      const { id, name, score } = player;
      return new Player({
        id,
        name,
        score,
      });
    });
  }

  async listBetsByPlayer(id: string): Promise<OutputListBestByPlayer> {
    const player = await prisma.players.findFirst({
      where: { id },
    });
    if (!player) {
      throw new Error("Participante não encontrado");
    }
    const countries = await prisma.countries.findMany();
    const countriesEntities = countries.map((country) => {
      const { id, name, slug, flag, group } = country;
      return new Country({
        id,
        name,
        slug,
        flag,
        group,
      });
    });

    const betsDB = await prisma.bets.findMany({
      where: {
        player_id: id,
      },
      include: {
        game: true,
      },
      orderBy: {
        game: {
          group: "asc",
        },
      },
    });

    let bets: partidaProps[] = [];
    let total_score = 0;
    betsDB.forEach((bet) => {
      const ft_ctr = findCountryById(
        countriesEntities,
        bet.game.first_country_id
      );
      const sc_ctr = findCountryById(
        countriesEntities,
        bet.game.second_country_id
      );

      const match = {
        played_at: bet.game.played_at,
        bet: bet.bet,
        result: bet.game.match_score || "",
        first_slug: ft_ctr.slug,
        first_flag: ft_ctr.flag,
        second_slug: sc_ctr.slug,
        second_flag: sc_ctr.flag,
      };

      const score = checkResult(bet.game.match_score, bet.bet);
      total_score = total_score + score;

      bets.push(match);
    });

    await prisma.players.update({
      where: { id: player.id },
      data: { score: total_score },
    });

    return {
      player: {
        id,
        name: player.name,
        score: total_score,
      },
      bets,
    };
  }

  async listPlayersWithBets(): Promise<Player[]> {
    const players = await prisma.players.findMany({
      include: {
        Bets: true,
      },
      orderBy: {
        score: "desc",
      },
    });

    const playerReturn: Player[] = [];
    players.forEach((player) => {
      const { id, name, score, Bets } = player;
      if (Bets.length > 0) {
        playerReturn.push(
          new Player({
            id,
            name,
            score,
          })
        );
      }
    });
    return playerReturn;
  }
}

function checkResult(result: string, bet: string) {
  if (result === "" || result === null) {
    return 0;
  }

  if (result === bet) {
    return 3;
  } else {
    const r = result.split("-");
    let res = 0;
    if (parseInt(r[0]) === parseInt(r[1])) {
      res = 0;
    }
    if (parseInt(r[0]) > parseInt(r[1])) {
      res = 1;
    }
    if (parseInt(r[0]) < parseInt(r[1])) {
      res = 2;
    }

    const b = bet.split("-");
    let be = 0;
    if (parseInt(b[0]) === parseInt(b[1])) {
      be = 0;
    }
    if (parseInt(b[0]) > parseInt(b[1])) {
      be = 1;
    }
    if (parseInt(b[0]) < parseInt(b[1])) {
      be = 2;
    }

    if (be === res) {
      return 1;
    } else {
      return 0;
    }
  }
}
