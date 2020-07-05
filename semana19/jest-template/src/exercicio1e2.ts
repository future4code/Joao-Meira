import { User } from "./DTO/userInput";

export function performPurchase( user : User, value : number) : User | undefined {
    if( user.balance >= value ) {
        return { ...user, balance: user.balance - value}
    } else {
        return undefined
    }
}

const user : User = { name: "joão", balance: 100}

const teste1 = performPurchase(user, 50)
console.log(teste1)