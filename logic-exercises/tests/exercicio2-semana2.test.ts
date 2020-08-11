import { indexOfElement } from "../src/exercicio2-semana2";

describe("indexOfElement function", () => {
  const sourceMock = "Vi veri veniversum vivus vici";

  test("testing 1 character search with different case", () => {
    const queryMock = "E";

    expect(indexOfElement(sourceMock, queryMock)).toEqual(4);
  });
  test("testing 2 character search with different case", () => {
    const queryMock = "VI";

    expect(indexOfElement(sourceMock, queryMock)).toEqual(0);
  });
  test("testing spaced search query", () => {
    const queryMock = "i V";

    expect(indexOfElement(sourceMock, queryMock)).toEqual(1);
  });
  test("testing spaced wrong search query", () => {
    const queryMock = "V I";

    expect(indexOfElement(sourceMock, queryMock)).toEqual(-1);
  });
  test("testing long search query", () => {
    const queryMock = "iversum vi";

    expect(indexOfElement(sourceMock, queryMock)).toEqual(11);
  });
});
