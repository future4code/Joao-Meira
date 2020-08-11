import { checkingParentheses } from "../src/exercicio3-semana2";

describe("checkingParentheses function test", () => {

  test("testing empty array", () => {

    const inputMock = "";

    expect(checkingParentheses(inputMock)).toEqual(true);
  });
  test("testing simple open close true", () => {

    const inputMock = "[](){}";

    expect(checkingParentheses(inputMock)).toEqual(true);
  });
  test("testing simple open close false", () => {

    const inputMock = "[]()}{";

    expect(checkingParentheses(inputMock)).toEqual(false);
  });
  test("testing complex combination true", () => {

    const inputMock = "[{([({]}})){](})";

    expect(checkingParentheses(inputMock)).toEqual(true);
  });
  test("testing complex combination false", () => {

    const inputMock = "[{([({]}})){](}))";

    expect(checkingParentheses(inputMock)).toEqual(false);
  });
});
