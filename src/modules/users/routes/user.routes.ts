import { Router } from "express";

import { CreateUserController } from "../useCases/CreateUser/CreateUserController";
import { DeleteUserController } from "../useCases/DeleteUser/DeleteUserController";
import { ListAllUserController } from "../useCases/ListUsers/ListAllUsersController";
import { ShowUserController } from "../useCases/ShowUser/ShowUserController";
import { UpdateUserController } from "../useCases/UpdateUserEmail/UpdateUserController";

export const userRouter = Router();

// Controllers

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUserController();
const showUserController = new ShowUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

userRouter.post("/", createUserController.handle);

userRouter.get("/", listAllUsersController.handle);

userRouter.get("/:id", showUserController.handle);

userRouter.put("/:id", updateUserController.handle);

userRouter.delete("/:id", deleteUserController.handle);
