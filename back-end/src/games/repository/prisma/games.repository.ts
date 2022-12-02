import { Country } from "../../../countries/domain/entity/Country";
import { prisma } from "../../../@shared/db/prisma.client";
import { Game } from "../../domain/entity/game";
import {
  GamesRepositoryInterface,
  OutputFindByIdGame,
} from "../../domain/repository/games-repository.interface";
import { findCountryById } from "../../../countries/domain/utils/find-country-by-id";
import { changeGameTime } from "../../../@shared/utils/changeGameTime";

export class GamesRepository implements GamesRepositoryInterface {
  async add(game: Game): Promise<void> {
    await prisma.games.create({
      data: {
        id: game.id,
        played_at: game.played_at,
        first_country_id: game.first_country.id as any,
        second_country_id: game.second_country.id as any,
        status: game.status,
        group: game.group,
        game_time: Number(changeGameTime(game.played_at)),
      },
    });
  }

  async findById(id: string): Promise<OutputFindByIdGame> {
    const find = await prisma.games.findFirst({ where: { id } });
    if (!find) {
      throw new Error("Partida não encontrada");
    }
    const {
      first_country_id,
      second_country_id,
      played_at,
      match_score,
      result,
      status,
    } = find;

    return {
      id,
      played_at,
      first_country_id,
      second_country_id,
      match_score,
      result,
      status,
    };
  }

  async all(): Promise<Game[]> {
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

    const games = await prisma.games.findMany({
      where: {
        group: "OITAVAS",
      },
      orderBy: { game_time: "asc" },
    });

    return games.map((game) => {
      const ft_ctry = findCountryById(countriesArray, game.first_country_id);
      const sc_ctry = findCountryById(countriesArray, game.second_country_id);
      return new Game({
        id: game.id,
        played_at: game.played_at,
        first_country: ft_ctry,
        second_country: sc_ctry,
        group: game.group,
        match_score: game.match_score,
        status: game.status as any,
      });
    });
  }

  async gamesAndResults(): Promise<Game[]> {
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

    const games = await prisma.games.findMany({
      orderBy: { game_time: "asc" },
    });

    return games.map((game) => {
      const ft_ctry = findCountryById(countriesArray, game.first_country_id);
      const sc_ctry = findCountryById(countriesArray, game.second_country_id);
      return new Game({
        id: game.id,
        played_at: game.played_at,
        first_country: ft_ctry,
        second_country: sc_ctry,
        group: game.group,
        match_score: game.match_score,
        status: game.status as any,
      });
    });
  }

  async changeMatchScore(game: Game): Promise<void> {
    await prisma.games.update({
      where: { id: game.id },
      data: {
        match_score: game.match_score,
        result: game.result(),
        status: game.status,
      },
    });
  }

  async changeGameTime(): Promise<void> {
    const games = await prisma.games.findMany();
    games.forEach(async (game) => {
      const game_time = changeGameTime(game.played_at);
      await prisma.games.update({
        where: { id: game.id },
        data: { game_time: Number(game_time) },
      });
    });
  }
}
