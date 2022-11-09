import { Router } from "express";
import { AllGamesController } from "../../../games/usecase/all-games/all-games.controller";
import { AddGameController } from "../../../games/usecase/add-game/add-game.controller";

const addGameController = new AddGameController();
const allGamesController = new AllGamesController();
const gamesRoutes = Router();

gamesRoutes.post("/add", addGameController.handle);
gamesRoutes.get("/all", allGamesController.handle);

export { gamesRoutes };
