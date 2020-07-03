import { Router } from "express";
import { userRouter } from "./User.routes";
import { bandRouter } from "./Band.routes";
import { showRouter } from "./Show.routes";

export const routes = Router();

routes.use("/user", userRouter);
routes.use("/band", bandRouter);
routes.use("/show", showRouter);
