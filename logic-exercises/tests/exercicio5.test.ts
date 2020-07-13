import { dateFormat } from "../src/exercicio5";

describe("testando conversor de segundos para hh:mm:ss", () => {
  test("testando números aleatórios de 3 algarismos", () => {
    const secondsMock = 235;

    const formatMock = jest.fn((num) => ("0" + num).slice(-2));

    const test = dateFormat(secondsMock, formatMock)
    
    expect(test).toEqual("0h 03m 55s")
    expect(formatMock).toBeCalledTimes(2)
  });
  test("testando números aleatórios de 4 algarismos", () => {
    const secondsMock = 1234;

    const formatMock = jest.fn((num) => ("0" + num).slice(-2));

    const test = dateFormat(secondsMock, formatMock)
    
    expect(test).toEqual("0h 20m 34s")
    expect(formatMock).toBeCalledTimes(2)
  });
  test("testando números aleatórios de 10 algarismos", () => {
    const secondsMock = 1234567890;

    const formatMock = jest.fn((num) => ("0" + num).slice(-2));

    const test = dateFormat(secondsMock, formatMock)
    
    expect(test).toEqual("342935h 31m 30s")
    expect(formatMock).toBeCalledTimes(2)
  });
});
