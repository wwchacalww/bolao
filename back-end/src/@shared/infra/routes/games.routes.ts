import { Router } from "express";
import { AllGamesController } from "../../../games/usecase/all-games/all-games.controller";
import { AddGameController } from "../../../games/usecase/add-game/add-game.controller";
import { ChangeMatchScoreController } from "../../../games/usecase/change-match-score/change-match-score.controller";
import { ChangeGameTimeController } from "../../../games/usecase/change-game-time/change-game-time.controller";
import { GamesAndResultsController } from "../../../games/usecase/games-and-results/games-and-results.controller";
import { ensureAuthenticate } from "../middlewares/ensure-authenticate";
import { FindByIdGameController } from "../../../games/usecase/find-by-id/find-by-id-game.controller";

const addGameController = new AddGameController();
const allGamesController = new AllGamesController();
const changeMatchScoreController = new ChangeMatchScoreController();
const changeGameTimeController = new ChangeGameTimeController();
const gamesAndResultsController = new GamesAndResultsController();
const findByIdGameController = new FindByIdGameController();
const gamesRoutes = Router();

gamesRoutes.post("/add", addGameController.handle);
gamesRoutes.get("/all", allGamesController.handle);
gamesRoutes.get("/games", gamesAndResultsController.handle);
gamesRoutes.get("/:game_id", findByIdGameController.handle);
gamesRoutes.put(
  "/change-score",
  ensureAuthenticate,
  changeMatchScoreController.handle
);
gamesRoutes.put("/change-game-time", changeGameTimeController.handle);

export { gamesRoutes };
