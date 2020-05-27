//EXERCICIO 6
//a. o Promise.all envia todas as requisições ao mesmo tempo e
// espera o retorno de todas as promises para dar sequência ao código.
//b. A vantagem é a velocidade de realização das tarefas, uma vez que não necessita esperar o retorno de cada
//promise para enviar uma nova requisição.
//c.

import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

type User = {
    id: string,
    name: string,
    email: string,
}

const getUsers = async () : Promise<User[]> => {
    const response = await axios.get(`${baseUrl}/subscribers/all`)
    return response.data.map( (user : User) => {
       return {
        id: user.id,
        name: user.name,
        email: user.email,
       } 
    })
}

const test = async () : Promise<any> => {

    const usersArray : User[] = await getUsers();
        console.log("Usuários baixados!")

    const sendNotification = async () : Promise<void> => {
       
        const promisesArray = [];

        for ( let user of usersArray ) {
            promisesArray.push(
                axios.post(
                    `${baseUrl}/notifications/send`,
                    {
                        subscriberId: user.id,
                        message: "Estamos muito felizes de vc ter chegado até aqui! De: JM"
                    },
                )
            )
            console.log(`Notification sent to ${user.name}`)
        }
        await Promise.all(promisesArray)
        console.log('All notifications sent')
    }
    sendNotification();
}

test();