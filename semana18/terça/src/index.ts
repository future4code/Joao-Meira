import express from "express";
import { AddressInfo } from "net";
import { 
  createUserEndingPoint,
  loginEndingPoint
} from "./requisitionsPOST";
import { 
  deleteUserEndingPoint
} from "./requisitionsDELETE";
import { 
  getUserByIdEndingPoint, 
  getUserProfileEndingPoint 
} from "./requisitionsGET";


const app = express();

app.use(express.json());

app.post("/signup", createUserEndingPoint)

app.post("/login", loginEndingPoint)

app.get("/user/profile", getUserProfileEndingPoint)

app.delete("/admin/delete/:id", deleteUserEndingPoint)

app.get("/user/:id/", getUserByIdEndingPoint)


const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
