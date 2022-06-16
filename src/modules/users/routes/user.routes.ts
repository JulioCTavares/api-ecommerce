import { Router } from "express";

import { AuthenticateUserController } from "../useCases/AuthenticateUser/AuthenticateUserController";
import { CreateUserController } from "../useCases/CreateUser/CreateUserController";
import { DeleteUserController } from "../useCases/DeleteUser/DeleteUserController";
import { ListAllUserController } from "../useCases/ListUsers/ListAllUsersController";
import { ShowUserController } from "../useCases/ShowUser/ShowUserController";
import { UpdateUserController } from "../useCases/UpdateUserEmail/UpdateUserController";
import { ensuredAuthenticated } from "./middleware/ensureUserAuthenticate";
import {
  createUserValidate,
  deleteUserValidate,
  loginValidate,
  showUserValidate,
  updateUserValidate,
} from "./validations/user.validations";

export const userRouter = Router();

// Controllers

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUserController();
const showUserController = new ShowUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const authenticateUserController = new AuthenticateUserController();

userRouter.post("/", createUserValidate, createUserController.handle);

userRouter.post("/login", loginValidate, authenticateUserController.handle);

userRouter.use(ensuredAuthenticated);

userRouter.get("/", listAllUsersController.handle);

userRouter.get("/:id", showUserValidate, showUserController.handle);

userRouter.put("/:id", updateUserValidate, updateUserController.handle);

userRouter.delete("/:id", deleteUserValidate, deleteUserController.handle);
