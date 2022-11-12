import { AddBetController } from "../../../bets/usecase/add-bet/add-bet.controller";
import { Router } from "express";
import { AddPlayerController } from "../../../players/usecase/add-player/add-player.controller";
import { FindByIdPlayerController } from "../../../players/usecase/find-by-id/find-by-id-player.controller";
import { AddMassBetController } from "../../../bets/usecase/add-mass-bet/add-mass-bet-controller";
import { ListBetsByPlayerController } from "../../../players/usecase/list-bets-by-player/list-bets-by-player.controller";
import { ListPlayersWithBetsController } from "../../../players/usecase/list-players-with-bets/list-players-with-bets.controller";

const addPlayerController = new AddPlayerController();
const addBetController = new AddBetController();
const findByIdController = new FindByIdPlayerController();
const listBetsByPlayerController = new ListBetsByPlayerController();
const addMassBetController = new AddMassBetController();
const listPlayersWithBetsController = new ListPlayersWithBetsController();

const playersRoutes = Router();

playersRoutes.post("/add", addPlayerController.handle);
playersRoutes.post("/bet", addBetController.handle);
playersRoutes.get("/:player_id", findByIdController.handle);
playersRoutes.get("/bets/:player_id", listBetsByPlayerController.handle);
playersRoutes.post("/bets", addMassBetController.handle);
playersRoutes.get("/with-bets/players", listPlayersWithBetsController.handle);

export { playersRoutes };
