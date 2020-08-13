import { negativeNumberCount } from "../src/exercicio4-semana3"

describe("negativeNumberCount test", () => {
    test("testing 2 row, 4 columns matrix", () => {

        const matrixMock = [
            [0, 1, -2, -3],
            [-2, 4, 1, 0],
        ]

        expect(negativeNumberCount(matrixMock)).toEqual(3)
    })
    test("testing 4 row, 4 columns matrix", () => {

        const matrixMock = [
            [0, 1, -2, -3],
            [-2, 4, 1, 0],
            [0, 1, -2, -3],
            [-2, 4, 1, 0],
        ]

        expect(negativeNumberCount(matrixMock)).toEqual(6)
    })
    test("testing 6 row, 4 columns matrix", () => {

        const matrixMock = [
            [0, 1, -2, -3],
            [-2, 4, 1, 0],
            [0, 1, -2, -3],
            [-2, 4, 1, 0],
            [0, 1, -2, -3],
            [-2, 4, 1, 0],
        ]

        expect(negativeNumberCount(matrixMock)).toEqual(9)
    })
    test("testing crazy matrix", () => {

        const matrixMock = [
            [0, 1, -2, -3],
            [-2, 4, 1, 0, -10, -100000],
            [20000, 3, 1, 0.5, -0.1],
            [0, 1, -2, -3],
            [-2, 4, 1, 0, -10, -100000],
            [20000, 3, 1, 0.5, -0.1],
            [0, 1, -2, -3],
            [-2, 4, 1, 0, -10, -100000],
            [20000, 3, 1, 0.5, -0.1],
        ]

        expect(negativeNumberCount(matrixMock)).toEqual(18)
    })
})