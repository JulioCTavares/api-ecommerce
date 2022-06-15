import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../config/upload";
import { CreateProductController } from "../useCases/createProduct/CreateProductController";
import { DeleteProductController } from "../useCases/deleteProduct/DeleteProductController";
import { ListAllProductController } from "../useCases/listAllProducts/ListAllProductsController";
import { ShowProductController } from "../useCases/showProduct/ShowProductController";

export const productRouter = Router();

const testUpload = multer(uploadConfig);

// Controllers
const createProductController = new CreateProductController();
const showProductController = new ShowProductController();
const listAllProductController = new ListAllProductController();
const deleteProductController = new DeleteProductController();

// Routes

productRouter.post(
  "/",
  testUpload.single("image"),
  createProductController.handle
);

productRouter.get("/", listAllProductController.handle);

productRouter.get("/:id", showProductController.handle);

productRouter.delete("/:id", deleteProductController.handle);
