import { AddressInfo } from "net";
import { 
    getActorByIdBuild, 
    updateSalaryBuild, 
    genderCountBuild 
} from "./queries";
import express, { Request, Response } from "express";

export const app = express();

app.use(express.json());


    app.get("/actor/:id", async (
        request : Request, 
        response : Response 
        ) => {
            try {
                const id = request.params.id;
                const actor = await getActorByIdBuild(id)

                response.status(200).send(actor)
            } catch (error) {
                response.status(400).send({
                    error: error.message,
                })
            }
    })

    app.get("/actor", async (
        request : Request, 
        response : Response 
        ) => {
            console.log(request.query.gender)
            try {
                const gender = request.query.gender as string;
                const count = await genderCountBuild(gender)

                response.status(200).send({
                    quantity: count
                })
            } catch (error) {
                response.status(400).send({
                    error: error.message,
                })
            }
    })


    const updateSalary = async (
        request : Request, 
        response : Response 
        ) => {
            try {
                const update = {
                    id: request.body.id,
                    salary: request.body.salary
                }
                console.log(request.body)
                await updateSalaryBuild(update.id, update.salary)
                response.status(200).send( {message: 'Salário atualizado!'} )
                
            } catch (error) {
                response.status(400).send({
                    error: error.message,
                })
            }
    }

    app.put("/actor/salary", updateSalary)


    export const server = app.listen( 3000, () => {
        if (server) {
          const address = server.address() as AddressInfo;
          console.log(`Server is running in http://localhost:${address.port}`);
        } else {
          console.error(`Failure upon starting server.`);
        }
      });