import { findCommonPrefix } from "../src/exercicio4-semana2";

describe("findCommonPrefix function test", () => {

  test("testing no common prefix", () => {

    const inputMock = ["oi", "veri", "veniversum", "vivus", "vici"];

    expect(findCommonPrefix(inputMock)).toEqual("");
  });
  test("testing no common prefix 2", () => {

    const inputMock = ["vi", "veri", "veniversum", "vivus", "vici", "oi"];

    expect(findCommonPrefix(inputMock)).toEqual("");
  });
  test("testing one letter prefix", () => {

    const inputMock = ["vi", "veri", "veniversum", "vivus", "vici"];

    expect(findCommonPrefix(inputMock)).toEqual("v");
  });
  test("testing many letters prefix", () => {

    const inputMock = ["beringela", "berimbau", "berin"];

    expect(findCommonPrefix(inputMock)).toEqual("beri");
  });

});
