import { Router } from "express";
import { countriesRoutes } from "./countries.routes";
import { gamesRoutes } from "./games.routes";
import { playersRoutes } from "./players.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();

routes.use("/api/countries", countriesRoutes);
routes.use("/api/games", gamesRoutes);
routes.use("/api/players", playersRoutes);
routes.use("/api/users", usersRoutes);

export { routes };
