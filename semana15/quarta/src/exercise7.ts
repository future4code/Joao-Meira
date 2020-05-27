//EXERCÍCIO 7


import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

const arg1 = process.argv[2];
const arg2 = process.argv[3]

const createUser = async (name : string, email : string) : Promise<void> => {
    axios.put(
        `${baseUrl}/subscribers`,
        {
            name: name,
            email: email,
        },
)}

const test = async () : Promise<any> => {
    if(arg1 && arg2){
        try {
            await createUser(arg1, arg2)
            console.log(`Usuário ${arg1} - ${arg2} cadastrado!`)
        } catch(error){
            console.error(error)
        }  
    }
}

test();