import { findingTargetSum } from "../src/exercicio3-semana3"

describe("findingTargetSum test", () => {
    test("testing position 3, 4 sum", () => {

        const arrayMock = [1, 10, 25, 40, 8, 101]

        const targetMock = 48

        expect(findingTargetSum(arrayMock, targetMock)).toContain(3)
        expect(findingTargetSum(arrayMock, targetMock)).toContain(4)
    })
    test("testing position 0, 5 sum", () => {

        const arrayMock = [1, 10, 25, 40, 8, 101]

        const targetMock = 102

        expect(findingTargetSum(arrayMock, targetMock)).toContain(0)
        expect(findingTargetSum(arrayMock, targetMock)).toContain(5)
    })
    test("testing position 0, 5 sum", () => {

        const arrayMock = [1, 10, 25, 40, 8, 101]

        const targetMock = 35

        expect(findingTargetSum(arrayMock, targetMock)).toContain(1)
        expect(findingTargetSum(arrayMock, targetMock)).toContain(2)
    })
})