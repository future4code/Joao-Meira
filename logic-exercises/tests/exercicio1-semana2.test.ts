import { findMissingNumber } from "../src/exercicio1-semana2";

describe("Testing missing number function", () => {
  let arrayOfNumbers: number[] = [];
  for (let i: number = 1; i < 101; i++) arrayOfNumbers[i] = i;

  function extractNumber(array: number[], randomNumber: number) {
    array.splice(randomNumber, 1);
    return array;
  }

  test("testing ordered array, subtracting random number", () => {
    const randomNumberMock = Math.floor(Math.random() * 100);
    const missingNumber = findMissingNumber(
      extractNumber(arrayOfNumbers, randomNumberMock)
    );

    expect(missingNumber).toEqual(randomNumberMock);
  });
});
