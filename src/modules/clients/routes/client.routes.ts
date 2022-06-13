import { Router } from "express";

import { CreateClientController } from "../useCases/createClient/CreateClientController";
import { DeleteClientController } from "../useCases/deleteClient/DeleteClientController";
import { ListClientsConroller } from "../useCases/listClients/LIstClientsController";
import { ShowClientController } from "../useCases/showClient/ShowClientController";

export const clientRouter = Router();

// Controllers

const createClientController = new CreateClientController();
const listClientsController = new ListClientsConroller();
const showClientController = new ShowClientController();
const deleteClientController = new DeleteClientController();

// Routes

clientRouter.post("/", createClientController.handle);
clientRouter.get("/", listClientsController.handle);
clientRouter.get("/:id", showClientController.handle);
clientRouter.delete("/:id", deleteClientController.handle);
