import { AddressInfo } from "net";
import express from 'express';
import { 
    createUserEndingPoint, 
    createTaskEndingPoint,
    bindToTaskEndingPoint,    
} from "./requisitionsCREATE";
import { 
    getUserEndingPoint,
    getTaskEndingPoint,
    getAllUsersEndingPoint,
    getUserTasksEndingPoint,
    searchUserEndingPoint,
    getResponsibleEndingPoint
} from "./requisitionsGET";
import { 
    editUserEndingPoint
} from "./requisitionsEDIT";

export const app = express();
app.use(express.json());

app.post("/user", createUserEndingPoint)

app.post("/list", createTaskEndingPoint)

app.get("/user/all", getAllUsersEndingPoint)

app.get("/user/:id", getUserEndingPoint)

app.get("/user?", searchUserEndingPoint)

app.get("/task?", getUserTasksEndingPoint)

app.get("/list/:id", getTaskEndingPoint)

app.put("/user/edit", editUserEndingPoint)

app.post("/user/bindtotask", bindToTaskEndingPoint)

app.get("/user/:id/responsible", getResponsibleEndingPoint)



export const server = app.listen( 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
    });