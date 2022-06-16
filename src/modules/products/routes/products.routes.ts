import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../config/upload";
import { ensuredAuthenticated } from "../../users/routes/middleware/ensureUserAuthenticate";
import { CreateProductController } from "../useCases/createProduct/CreateProductController";
import { DeleteProductController } from "../useCases/deleteProduct/DeleteProductController";
import { ListAllProductController } from "../useCases/listAllProducts/ListAllProductsController";
import { ShowProductController } from "../useCases/showProduct/ShowProductController";
import {
  createProductValidate,
  deleteProductValidate,
  showProductValidate,
} from "./validation/product.validation";

export const productRouter = Router();

const testUpload = multer(uploadConfig);

// Controllers
const createProductController = new CreateProductController();
const showProductController = new ShowProductController();
const listAllProductController = new ListAllProductController();
const deleteProductController = new DeleteProductController();

// Routes

productRouter.use(ensuredAuthenticated);

productRouter.post(
  "/",
  testUpload.single("image"),
  createProductValidate,
  createProductController.handle
);

productRouter.get("/", listAllProductController.handle);

productRouter.get("/:id", showProductValidate, showProductController.handle);

productRouter.delete(
  "/:id",
  deleteProductValidate,
  deleteProductController.handle
);
