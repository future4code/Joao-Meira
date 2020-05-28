//EXERCICIO 5

//a. O forEach não conseguiria aplicar a funcionalidade de await, permitindo que o código seguinte
//fosse executado antes de retornadas as responses.
//b.

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

    const usersArray = await getUsers();
        console.log("Usuários baixados!")

    const sendNotification = async () : Promise<void> => {
        for ( let user of usersArray ) {
            await axios.post(
                `${baseUrl}/notifications/send`,
                {
                    subscriberId: user.id,
                    message: "Estamos muito felizes de vc ter chegado até aqui!"
                },
            )
            console.log(`Notification sent to ${user.name}`)
        }
        console.log('All notifications sent')
    }
    sendNotification();
}

test();