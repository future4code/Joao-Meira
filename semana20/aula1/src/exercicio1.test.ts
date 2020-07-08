import { sumLenghtAndMultiplication, maxAndMinValue } from "./exercicio1";

describe("testing exercicio1", () => {
  test("multiply, sum and lenght", () => {
    
    const arrayMock = [1, 2, 3, 4, 5];

    const funcMock = sumLenghtAndMultiplication(arrayMock);

    expect(funcMock).toStrictEqual({soma: 15, 'multiplicação': 120, quantidade: 5})

  });
  test("min and max function", () => {

    const arrayMock = [1, 2, 3, 4, 5];

    const funcMock = maxAndMinValue(arrayMock);

    expect(funcMock).toStrictEqual({'mínimo': 1, 'máximo': 5})

  });
});
