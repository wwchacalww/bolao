import { Country } from "../../../countries/domain/entity/Country";
import { findCountryById } from "../../../countries/domain/utils/find-country-by-id";
import { Game, StatusType } from "../../../games/domain/entity/game";
import { Player } from "../../../players/domain/entities/player";
import { findPlayerById } from "../../../players/domain/utils/find-player-by-id";
import { v4 } from "uuid";
import { prisma } from "../../../@shared/db/prisma.client";
import { Bet } from "../../domains/entity/bet";
import {
  BetsRepositoryInterface,
  InputAddMassBetDTO,
} from "../../domains/repository/bet-repository.interface";

export class BetsRepository implements BetsRepositoryInterface {
  async add(bet: Bet): Promise<void> {
    const data = {
      id: bet.id,
      player_id: bet.player.id,
      game_id: bet.game.id,
      bet: bet.bet,
    };

    await prisma.bets.create({
      data,
    });
  }

  async addMassBets(input: InputAddMassBetDTO): Promise<void> {
    const { bets, player_id } = input;
    bets.forEach(async (bet) => {
      const data = {
        id: v4(),
        player_id,
        game_id: bet.game_id,
        bet: bet.bet,
      };

      await prisma.bets.create({
        data,
      });
    });
  }

  async all(): Promise<Bet[]> {
    throw new Error("Method not implemented.");
  }
  listBetsOnPlayer(player_id: string): Promise<Bet[]> {
    throw new Error("Method not implemented.");
  }

  async listBetsOnGame(game_id: string): Promise<Bet[]> {
    const findBets = await prisma.bets.findMany({
      where: {
        game_id,
      },
      include: {
        game: true,
      },
    });

    if (!findBets) {
      throw new Error("Partida não encotrada");
    }

    const findPlayers = await prisma.players.findMany({
      orderBy: { name: "asc" },
    });
    const players = findPlayers.map((play) => {
      return new Player({
        id: play.id,
        name: play.name,
        score: play.score,
      });
    });

    const countries = await prisma.countries.findMany({
      orderBy: {
        group: "asc",
      },
    });

    const countriesArray = countries.map((country) => {
      return new Country({
        id: country.id,
        name: country.name,
        slug: country.slug,
        flag: country.flag,
        group: country.group,
      });
    });

    return findBets.map((bet) => {
      const player = findPlayerById(players, bet.player_id);
      const ft_ctry = findCountryById(
        countriesArray,
        bet.game.first_country_id
      );
      const sc_ctry = findCountryById(
        countriesArray,
        bet.game.second_country_id
      );

      const game = new Game({
        id: bet.id,
        group: bet.game.group,
        played_at: bet.game.played_at,
        match_score: bet.game.match_score,
        status: bet.game.status as StatusType,
        first_country: ft_ctry,
        second_country: sc_ctry,
      });

      return new Bet({
        id: bet.id,
        bet: bet.bet,
        player,
        game,
      });
    });
  }
}
