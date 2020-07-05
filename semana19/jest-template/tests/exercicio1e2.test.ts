import { User } from "src/DTO/userInput"
import {performPurchase} from '../src/exercicio1e2'

describe ( "testing exercicio 1", () => {
    test("positive balance", () => {
        const mockUser : User = {name: 'joao', balance: 100}
        const mockValue : number = 80

        const purchase = performPurchase( mockUser, mockValue )

        expect(purchase?.balance).toBeGreaterThan(0)
        expect(purchase?.name).toBe('joao')
    })
    test("equal balance", () => {
        const mockUser : User = {name: 'joao', balance: 100}
        const mockValue : number = 100

        const purchase = performPurchase( mockUser, mockValue )

        expect(purchase?.balance).toEqual(0)
        expect(purchase?.name).toBe('joao')
    })
    test("higher value", () => {
        const mockUser : User = {name: 'joao', balance: 100}
        const mockValue : number = 120

        const purchase = performPurchase( mockUser, mockValue )

        expect(purchase?.balance).toEqual(undefined)
    })
})