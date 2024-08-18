import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import router from "./routes";
import { errorResponse, Status } from './utils/api-response';

const PORT = process.env.PORT ?? 8000;

async function startServer() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(helmet());
  app.use(cookieParser());

  app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  }));

  app.use("/api/v1", router);

  app.use(function (req: Request, res: Response, next: NextFunction) {
    res.status(404).json(errorResponse({
      status: Status.ERROR,
      code: 404,
      message: "404 not found"
    }));
  });

  app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(500).json(errorResponse({
      status: Status.ERROR,
      code: 500,
      message: "Internal server error occured"
    }));
  });

  app.listen(PORT, function () {
    console.log("Started on port: ", PORT);
  });
}

startServer();