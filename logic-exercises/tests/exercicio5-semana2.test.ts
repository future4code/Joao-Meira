import { whichToSteal } from "../src/exercicio5-semana2";

describe("whichToSteal function test", () => {

  test("testing 1 house", () => {

    const inputMock = [10];

    expect(whichToSteal(inputMock)).toEqual(10);
  });
  test("testing 2 houses", () => {

    const inputMock = [10, 5];

    expect(whichToSteal(inputMock)).toEqual(10);
  });
  test("testing 3 houses", () => {

    const inputMock = [10, 5, 10];

    expect(whichToSteal(inputMock)).toEqual(20);
  });
  test("testing 4 houses", () => {

    const inputMock = [100, 1, 100, 400];

    expect(whichToSteal(inputMock)).toEqual(401);
  });
  test("testing 5 houses", () => {

    const inputMock = [1000, 1, 100, 400, 100000];

    expect(whichToSteal(inputMock)).toEqual(101100);
  });
  test("testing 10 houses", () => {

    const inputMock = [1000, 1, 100, 400, 100000, 1000, 1, 100, 400, 100000];

    expect(whichToSteal(inputMock)).toEqual(101501);
  });


});
