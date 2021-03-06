import express from "express";
import { AddressInfo } from "net";
import "express-async-errors";
import errorCatcher from "./middlewares/ErrorCatcher";
import { routes } from "./routes";

const app = express();
app.use(express.json());

app.use(routes);

app.use(errorCatcher);

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
