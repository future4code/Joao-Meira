//RESPOSTA EXERCÍCIO 1

// a. RESPOSTA: requisição get do endponint  {{base-url}}/subscribers/all 
// bigint.

// b. e c. RESPOSTA ABAIXO:


// import axios from 'axios'

// const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

// async function allSubscribers () : Promise<any[]> {

//     const allSubscribers = await axios.get(`${baseUrl}/subscribers/all`)
//     return allSubscribers.data
// }


//EXERCÍCIO 2

// a. uma função nomeada difere da arrow function pela inexistência de definição da função como uma constante.
// Para tanto, a arrow function conta com a chamada dos argumentos após o sinal de '=' , onde ocorre tb a tipagem
// da função, e o corpo da função é apresentado entre {} após o sinal => 
//b. RESPOSTA ABAIXO

// import axios from 'axios'

// const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

// const allSubscribers = async () : Promise<any[]> => {

//     const subscribersList = await axios.get(`${baseUrl}/subscribers/all`)
//     return subscribersList.data
// }

//EXERCICIO 3

//a. Apesar de não aparecer nenhuma indicação de erro de tipagem, imagino que não haja erro
//já que a tipagem <any> permite qualquer tipo como resultado.
//b. Fazemos isso para verificar se a resposta retorna o que é pedido na requisição, uma vez
// que não há como o typescript realizar a checagem de tipo.
//c.

import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

type User = {
    id: string,
    name: string,
    email: string,
}

const allSubscribers = async () : Promise<User[]> => {

    const subscribersList = await axios.get(`${baseUrl}/subscribers/all`)
    return subscribersList.data.map((response : any) => {
        return {
            id: response.id,
            name: response.name,
            email: response.email,
        }
    })
}