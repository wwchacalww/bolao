import { Router } from "express";
import { AuthenticateController } from "../../../users/usecases/authenticate/authenticate.controller";
import { RefreshTokenController } from "../../../users/usecases/refresh-token/refresh-token.controller";
import { CreateUserController } from "../../../users/usecases/create-user/create-user.controller";
import { ensureAuthenticate } from "../middlewares/ensure-authenticate";
import { MeController } from "../../../users/usecases/me/me.controller";

const usersRoutes = Router();
const createUserController = new CreateUserController();
const authenticateController = new AuthenticateController();
const refreshTokenController = new RefreshTokenController();
const meController = new MeController();

usersRoutes.post("/", ensureAuthenticate, createUserController.handle);
usersRoutes.post("/login", authenticateController.handle);
usersRoutes.post("/refresh", refreshTokenController.handle);
usersRoutes.get("/me", ensureAuthenticate, meController.handle);

export { usersRoutes };
