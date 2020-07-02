import express from "express";
import {AddressInfo} from "net";
import { userRouter } from "./routes/User.routes";
import errorCatcher from "./middlewares/ErrorCatcher";

const app = express();
app.use(express.json());

app.use("/users/", userRouter);

app.use(errorCatcher);


const server = app.listen(process.env.PORT || 3000, ()=>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running http://localhost:${address.port}`);
    }else{
        console.error(`Failure upon starting server.`);
    };
});