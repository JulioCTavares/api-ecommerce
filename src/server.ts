import "reflect-metadata";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import "./utils/container";

import { routes } from "./routes";
import { errorMiddleware } from "./routes/middlewares/error-handling";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.use(errorMiddleware);

app.listen(process.env.PORT || 4000, () => console.log("server is runnig"));
