import { Router } from "express";
import { BandController } from "../controller/BandController";

export const bandRouter = Router();

bandRouter.post("/register", new BandController().registerBand);
bandRouter.post("/register", new BandController().getBandByNameOrId);

