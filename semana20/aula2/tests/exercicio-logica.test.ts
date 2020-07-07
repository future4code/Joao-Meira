// import { stringLengthAndCharacters, stringToArrayCharacter } from "../src/exercicio-logica"

// describe("testando exercicio 2", () =>{
//     test("testando letra a com frase", () => {

//         const stringMock = "Vi veri veniversum vivus vici"

//         const funcMock = stringLengthAndCharacters(stringMock)

//         expect(funcMock).toStrictEqual({
//             caracteres: 29,
//             'primeiro caracter': 'V',
//             'último caracter': 'i' 
//         })
//     })
//     test("testando letra a com palavra ultima letra maiúscula", () => {

//         const stringMock = "strogonoficamentE"

//         const funcMock = stringLengthAndCharacters(stringMock)

//         expect(funcMock).toStrictEqual({
//             caracteres: 17,
//             'primeiro caracter': 's',
//             'último caracter': 'E' 
//         })
//     })
//     test("testando letra b com palavra ultima letra maiúscula", () => {

//         const stringMock = " oi eu   sou o  goku   "

//         const funcMock = stringToArrayCharacter(stringMock)

//         expect(funcMock).toEqual(
//             [ 'o', 'i', 'e', 'u', 's', 'o', 'u', 'o', 'g', 'o', 'k', 'u' ]
//         )
//     })
// })