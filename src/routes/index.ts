import { Router } from "express";

import { clientRouter } from "../modules/clients/routes/client.routes";
import { orderRouter } from "../modules/orders/routes/order.routes";
import { productRouter } from "../modules/products/routes/products.routes";
import { userRouter } from "../modules/users/routes/user.routes";

export const routes = Router();

routes.use("/users", userRouter);
routes.use("/clients", clientRouter);
routes.use("/products", productRouter);
routes.use("/orders", orderRouter);
