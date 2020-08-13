import { anagramCheck } from "../src/exercicio2-semana3"

describe("anagramCheck test", () => {
    test("testing simple anagram", () => {

        const sMock = "ola"

        const tMock = "alo"

        expect(anagramCheck(sMock, tMock)).toEqual("T é anagrama de S")
    })
    test("testing bigger anagram", () => {

        const sMock = "meira"

        const tMock = "iarem"

        expect(anagramCheck(sMock, tMock)).toEqual("T é anagrama de S")
    })
    test("testing sentence anagram", () => {

        const sMock = "amor por roupa"

        const tMock = "roma poupo rar"

        expect(anagramCheck(sMock, tMock)).toEqual("T é anagrama de S")
    })
    test("testing words that are not anagram same length", () => {

        const sMock = "roupa"

        const tMock = "blusa"

        expect(anagramCheck(sMock, tMock)).toEqual("T não é anagrama de S")
    })
    test("testing words different length", () => {

        const sMock = "roupas"

        const tMock = "roupa"

        expect(anagramCheck(sMock, tMock)).toEqual("T não é anagrama de S")
    })
})