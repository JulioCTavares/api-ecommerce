import { Router } from "express";

import { clientRouter } from "../modules/clients/routes/client.routes";
import { userRouter } from "../modules/users/routes/user.routes";

export const routes = Router();

routes.use("/users", userRouter);
routes.use("/clients", clientRouter);
