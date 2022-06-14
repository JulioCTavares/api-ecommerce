import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../config/upload";
import { CreateProductController } from "../useCases/createProduct/CreateProductController";

export const productRouter = Router();

const testUpload = multer(uploadConfig);

// Controllers
const createProductController = new CreateProductController();

// Routes

productRouter.post(
  "/",
  testUpload.single("image"),
  createProductController.handle
);
