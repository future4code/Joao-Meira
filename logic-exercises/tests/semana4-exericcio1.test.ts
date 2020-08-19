import {findValue} from "../src/semana4-exercicio1"

describe("testing findValue", () => {
    test("testing existing number", () => {
        
        const mockArray = [20, 32, 41, 60, 1000, 1001, 1023, 2045]

        const mockTarget = 1001

        expect(findValue(mockArray, mockTarget)).toEqual(5)
    })
    test("testing NON-existing number", () => {
        
        const mockArray = [20, 32, 41, 60, 1000, 1001, 1023, 2045]

        const mockTarget = 33

        expect(findValue(mockArray, mockTarget)).toEqual(2)
    })
    test("testing number way bigger then all others in array", () => {
        
        const mockArray = [20, 32, 41, 60, 1000, 1001, 1023, 2045]

        const mockTarget = 100000000

        expect(findValue(mockArray, mockTarget)).toEqual(7)
    })
    test("testing number little bigger then all others in array", () => {
        
        const mockArray = [20, 32, 41, 60, 1000, 1001, 1023, 2045]

        const mockTarget = 2045.1

        expect(findValue(mockArray, mockTarget)).toEqual(7)
    })
})