import { Router } from "express";
import { userRouter } from "./User.routes";
import { bandRouter } from "./Band.routes";

export const routes = Router();

routes.use("/user", userRouter);
routes.use("/band", bandRouter);
