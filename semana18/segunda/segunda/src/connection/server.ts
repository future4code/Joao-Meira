import express from 'express'
import { AddressInfo } from "net";

export const app = express();
app.use(express.json())

const server = app.listen(
  process.env.PORT || 3000, () => {
    if(server) {
      const address = server.address() as AddressInfo;
      console.log(`Server running on 'http://localhost:${address.port}`)
    } else {
      console.log('Failed to run.')
    }
  }
)