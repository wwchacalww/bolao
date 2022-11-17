import { Router } from "express";
import { AllGamesController } from "../../../games/usecase/all-games/all-games.controller";
import { AddGameController } from "../../../games/usecase/add-game/add-game.controller";
import { ChangeMatchScoreController } from "../../../games/usecase/change-match-score/change-match-score.controller";

const addGameController = new AddGameController();
const allGamesController = new AllGamesController();
const changeMatchScoreController = new ChangeMatchScoreController();
const gamesRoutes = Router();

gamesRoutes.post("/add", addGameController.handle);
gamesRoutes.get("/all", allGamesController.handle);
gamesRoutes.put("/change-score", changeMatchScoreController.handle);

export { gamesRoutes };
