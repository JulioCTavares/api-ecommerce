import { Router } from "express";

import { ensuredAuthenticated } from "../../users/routes/middleware/ensureUserAuthenticate";
import { CreateOrderController } from "../useCases/createOrder/CreateOrderController";
import { DeleteOrderController } from "../useCases/deleteOrder/DeleteOrderController";
import { ListAllOrdersController } from "../useCases/listAllOrders/LIstAllOrdersController";
import { ShowOrderController } from "../useCases/showOrder/ShowOrderController";
import { UpdateOrderStatusController } from "../useCases/updateOrderStatus/UpdateOrderStatusController";

export const orderRouter = Router();

// Controllers

const createOrderController = new CreateOrderController();
const listAllOrderController = new ListAllOrdersController();
const showOrderController = new ShowOrderController();
const updateOrderStatusController = new UpdateOrderStatusController();
const deleteOrderController = new DeleteOrderController();

// Routes

orderRouter.use(ensuredAuthenticated);
orderRouter.post("/", createOrderController.handle);
orderRouter.get("/", listAllOrderController.handle);
orderRouter.get("/:id", showOrderController.handle);
orderRouter.put("/:id/status", updateOrderStatusController.handle);
orderRouter.delete("/:id", deleteOrderController.handle);
