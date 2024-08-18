import { Router } from "express";
import authRouter from "./auth";
import healthcheckRouter from "./healthcheck";
import usersRouter from "./users";

const router = Router();

router.use("/auth", authRouter);
router.use("/healthcheck", healthcheckRouter);
router.use("/users", usersRouter);

export default router;