import { ShowBusiness } from "../../src/business/ShowBusiness";
import { ShowInput, Show, stringToWeekDay } from "../../src/model/Show";
import { CustomError } from "../../src/errors/CustomError";

describe("testing createShow requisition", () => {
  let showDataBase = {} as any;
  let idGenerator = {} as any;

  test("should return custom error for wrong timetable", async () => {
    expect.assertions(3);
    const showBusinessMock = new ShowBusiness(showDataBase, idGenerator);
    const showMock: ShowInput = {
      weekDay: "sábado",
      startTime: 7,
      endTime: 8,
      bandId: "id",
    };

    try {
      await showBusinessMock.createShow(showMock);
    } catch (error) {
      expect(error).toBeInstanceOf(CustomError);
      expect(error.errorCode).toBe(400);
      expect(error.message).toBe(
        "Os shows só poderão acontecer entre 8h e 23h"
      );
    }
  });
  test("should return custom error for time conflict(1)", async () => {
    expect.assertions(4);
    const verifyConflict = jest.fn(
      () => new Show("idMock", stringToWeekDay("SABADO"), 8, 11, "bandIdMock")
    );
    showDataBase = { verifyConflict };
    const showBusinessMock = new ShowBusiness(showDataBase, idGenerator);
    const showMock: ShowInput = {
      weekDay: "SÁBADO",
      startTime: 9,
      endTime: 10,
      bandId: "id",
    };

    try {
      await showBusinessMock.createShow(showMock);
    } catch (error) {
      expect(verifyConflict).toHaveBeenCalledTimes(1);
      expect(error).toBeInstanceOf(CustomError);
      expect(error.errorCode).toBe(400);
      expect(error.message).toContain("NÃO está disponível");
    }
  });
  test("should return custom error for time conflict(2)", async () => {
    expect.assertions(4);
    const verifyConflict = jest.fn(
      () => new Show("idMock", stringToWeekDay("SABADO"), 9, 10, "bandIdMock")
    );
    showDataBase = { verifyConflict };
    const showBusinessMock = new ShowBusiness(showDataBase, idGenerator);
    const showMock: ShowInput = {
      weekDay: "sexta-feira",
      startTime: 9,
      endTime: 11,
      bandId: "id",
    };

    try {
      await showBusinessMock.createShow(showMock);
    } catch (error) {
      expect(verifyConflict).toHaveBeenCalledTimes(1);
      expect(error).toBeInstanceOf(CustomError);
      expect(error.errorCode).toBe(400);
      expect(error.message).toContain("NÃO está disponível");
    }
  });
  test("should return custom error for time conflict(3)", async () => {
    expect.assertions(4);
    const verifyConflict = jest.fn(
      () => new Show("idMock", stringToWeekDay("SABADO"), 22, 23, "bandIdMock")
    );
    showDataBase = { verifyConflict };
    const showBusinessMock = new ShowBusiness(showDataBase, idGenerator);
    const showMock: ShowInput = {
      weekDay: "SABADO",
      startTime: 21,
      endTime: 23,
      bandId: "id",
    };

    try {
      await showBusinessMock.createShow(showMock);
    } catch (error) {
      expect(verifyConflict).toHaveBeenCalledTimes(1);
      expect(error).toBeInstanceOf(CustomError);
      expect(error.errorCode).toBe(400);
      expect(error.message).toContain("NÃO está disponível");
    }
  });
  test("should return success", async () => {
    const verifyConflict = jest.fn(() => {});
    const createShow = jest.fn((show: Show) => {});
    showDataBase = { verifyConflict, createShow };
    const generate = jest.fn(() => "idMock");
    idGenerator = { generate };

    const showBusinessMock = new ShowBusiness(showDataBase, idGenerator);
    const showMock: ShowInput = {
      weekDay: "sexta-FEIRA",
      startTime: 8,
      endTime: 10,
      bandId: "bandIdMock",
    };

    await showBusinessMock.createShow(showMock);

    expect(verifyConflict).toHaveBeenCalled();
    expect(generate).toHaveBeenCalled;
    expect(createShow).toHaveBeenCalledWith(
      new Show("idMock", stringToWeekDay("SEXTA"), 8, 10, "bandIdMock")
    );
  });
});
