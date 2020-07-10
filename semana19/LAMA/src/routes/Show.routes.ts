import { Router } from "express";
import { ShowController } from "../controller/ShowController";


export const showRouter = Router()
const showController = new ShowController()

showRouter.post("/createshow", showController.createShow)
showRouter.get("/getshowsinday", showController.getShowsInDay)
