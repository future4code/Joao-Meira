### EXERCICIO 1
*a. Crie uma interface para representar o usuário*
**Resposta:**
```
export interface User {
    name : string,
    balance : number
}
```

*b. Implemente  a função*
**Resposta:**
```
import { User } from "./DTO/userInput";

function performPurchase( user : User, value : number) : User | undefined {
    if( user.balance >= value ) {
        return { ...user, balance: user.balance - value}
    } else {
        return undefined
    }
}

const user : User = { name: "joão", balance: 100}

const teste1 = performPurchase(user, 50)
console.log(teste1)
```

###EXERCICIO 2
*a. Faça um teste com um usuário com o saldo maior do que o valor de compra*
**Resposta:**
```
    test("positive balance", () => {
       const mockUser : User = {name: 'joao', balance: 100}
       const mockValue : number = 80

       const purchase = performPurchase( mockUser, mockValue )

       expect(purchase?.balance).toBeGreaterThan(0)
       expect(purchase?.name).toBe('joao')
     })
```


b*. Faça um teste com um usuário com o saldo igual ao valor de compra*
**Resposta:**
```
    test("equal balance", () => {
       const mockUser : User = {name: 'joao', balance: 100}
       const mockValue : number = 100

       const purchase = performPurchase( mockUser, mockValue )

       expect(purchase?.balance).toEqual(0)
       expect(purchase?.name).toBe('joao')
    })
```

c*. Faça um teste com um usuário com o saldo menor do que o valor de compra*
**Resposta:**
```
    test("higher value", () => {
       const mockUser : User = {name: 'joao', balance: 100}
       const mockValue : number = 120

       const purchase = performPurchase( mockUser, mockValue )

       expect(purchase?.balance).toEqual(undefined)
    })
```

### EXERCICIO 3
*a. Leia os códigos fornecidos acima com calma. Veja se não ficou com nenhuma dúvida.*

*b. Implemente a função*
**Resposta:**
Identificado como exercicio3.ts

*c. O que foi mais difícil de fazer?*
**Resposta:**
A estruturação dos tipos foi a parte mais difícil.


### EXERCICIO 4
*a. Escreva um teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil*

*b. Escreva um teste que receba um usuário americando que possa entrar em um estabelecimento no Brasil*
```
describe ('testing exercicio3', () => {
    test('allowed brazilian user', () => {
        const casinoMock : Casino = {
            name: "Gambling with the Devil",
            location: LOCATION.BRAZIL
        }
        const userMock : User[] = [{
            name: "Dr. Stein",
            age: 22,
            nationality: NATIONALITY.BRAZILIAN
        }]

        const functionMock : Result = verifyAge( casinoMock, userMock )

        expect(functionMock.brazilians).toBeTruthy()
   })
```

*c. Escreva um teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos.*


d*. Escreva um teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Eles querem estrar em um estabelecimento nos Estados Unidos.*

















