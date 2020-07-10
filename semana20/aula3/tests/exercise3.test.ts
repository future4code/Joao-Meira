import { compareStrings, compareStringsIgnoringCase } from "../logic-exercises/exercicio3"

describe("testando exercicio 3 a.", () =>{
    test("testando strings diferentes", () => {

        const string1Mock = "Felicidade e segurança são palavras que tomamos emprestado"
        const string2Mock = "Vi veri veniversum vivus vici"

        const funcMock = compareStrings(string1Mock, string2Mock)

        expect(funcMock).toBe(false)
    })
    test("testando strings iguais com case diferente", () => {

        const string1Mock = "Vi Veri Veniversum Vivus Vici"
        const string2Mock = "Vi veri veniversum vivus vici"

        const funcMock = compareStrings(string1Mock, string2Mock)

        expect(funcMock).toBe(false)
    })
    test("testando strings iguais", () => {

        const string1Mock = "Felicidade e segurança são palavras que tomamos emprestado"
        const string2Mock = "Felicidade e segurança são palavras que tomamos emprestado"

        const funcMock = compareStrings(string1Mock, string2Mock)

        expect(funcMock).toBe(true)
    })
})

describe("testando exercicio 3 b.", () =>{
    test("testando strings diferentes", () => {

        const string1Mock = "Felicidade e segurança são palavras que tomamos emprestado"
        const string2Mock = "Vi veri veniversum vivus vici"

        const funcMock = compareStringsIgnoringCase(string1Mock, string2Mock)

        expect(funcMock).toBe(false)
    })
    test("testando strings iguais com case diferente", () => {

        const string1Mock = "Vi Veri Veniversum Vivus Vici"
        const string2Mock = "Vi veri veniversum vivus vici"

        const funcMock = compareStringsIgnoringCase(string1Mock, string2Mock)

        expect(funcMock).toBe(true)
    })
    test("testando strings iguais", () => {

        const string1Mock = "Felicidade e segurança são palavras que tomamos emprestado"
        const string2Mock = "Felicidade e segurança são palavras que tomamos emprestado"

        const funcMock = compareStringsIgnoringCase(string1Mock, string2Mock)

        expect(funcMock).toBe(true)
    })
})