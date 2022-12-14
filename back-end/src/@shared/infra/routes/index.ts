import { Router } from "express";
import { countriesRoutes } from "./countries.routes";
import { gamesRoutes } from "./games.routes";
import { playersRoutes } from "./players.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();

routes.use("/countries", countriesRoutes);
routes.use("/games", gamesRoutes);
routes.use("/players", playersRoutes);
routes.use("/users", usersRoutes);

export { routes };
