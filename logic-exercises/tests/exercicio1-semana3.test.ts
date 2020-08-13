import { findSolitaryNumber } from "../src/exercicio1-semana3";

describe("findSolitaryNumber function test", () => {

  test("testing first number of array is solitary", () => {

    const inputMock = [1, 2, 3, 2, 3, 4, 4];

    expect(findSolitaryNumber(inputMock)).toEqual(1);
  });
  test("testing second number of array is solitary", () => {

    const inputMock = [1, 10, 2, 3, 2, 3, 4, 4, 1];

    expect(findSolitaryNumber(inputMock)).toEqual(10);
  });
  test("testing third number of array is solitary", () => {

    const inputMock = [1, 10, 102, 2, 3, 2, 3, 4, 4, 1, 10];

    expect(findSolitaryNumber(inputMock)).toEqual(102);
  });
  test("testing fourth number of array is solitary", () => {

    const inputMock = [1, 10, 102, 100100, 2, 3, 2, 3, 4, 102, 4, 1, 10];

    expect(findSolitaryNumber(inputMock)).toEqual(100100);
  });
  test("testing last number of array is solitary", () => {

    const inputMock = [1, 10, 102, 100100, 2, 3, 2, 3, 4, 102, 4, 1, 10, 100100, 0.8];

    expect(findSolitaryNumber(inputMock)).toEqual(0.8);
  });

});
