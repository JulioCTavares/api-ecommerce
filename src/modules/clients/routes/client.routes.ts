import { Router } from "express";

import { ensuredAuthenticated } from "../../users/routes/middleware/ensureUserAuthenticate";
import { AuthenticateClientController } from "../useCases/authClient/AuthClientController";
import { CreateClientController } from "../useCases/createClient/CreateClientController";
import { DeleteClientController } from "../useCases/deleteClient/DeleteClientController";
import { ListClientsController } from "../useCases/listClients/LIstClientsController";
import { ShowClientController } from "../useCases/showClient/ShowClientController";
import {
  createCLientValidate,
  deleteCLientValidate,
  loginClientValidate,
  showClientValidate,
} from "./validations/client.validation";

export const clientRouter = Router();

// Controllers

const createClientController = new CreateClientController();
const listClientsController = new ListClientsController();
const showClientController = new ShowClientController();
const deleteClientController = new DeleteClientController();
const authClientController = new AuthenticateClientController();
// Routes

clientRouter.post("/", createCLientValidate, createClientController.handle);
clientRouter.post("/login", loginClientValidate, authClientController.handle);
clientRouter.use(ensuredAuthenticated);
clientRouter.get("/", listClientsController.handle);
clientRouter.get("/:id", showClientValidate, showClientController.handle);
clientRouter.delete(
  "/:id",
  deleteCLientValidate,
  deleteClientController.handle
);
