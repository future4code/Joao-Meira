import { BandBusiness } from "../../src/business/BandBusiness";
import { Band } from "../../src/model/Band";

describe("Testing BandBusiness registerBand", () => {
  let bandDatabase = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("should return missing input for empty name", async () => {
    expect.assertions(2);
    const bandBusiness = new BandBusiness(
      bandDatabase as any,
      tokenGenerator as any,
      idGenerator as any
    );
    try {
      await bandBusiness.registerBand("", "MPB", "Toquinho", "token");
    } catch (error) {
      expect(error.errorCode).toBe(422);
      expect(error.message).toBe("Nome inválido");
    }
  });
  test("should return missing input for empty genre", async () => {
    expect.assertions(2);
    const bandBusiness = new BandBusiness(
      bandDatabase as any,
      tokenGenerator as any,
      idGenerator as any
    );
    try {
      await bandBusiness.registerBand("Os AfroSambas", "", "Toquinho", "token");
    } catch (error) {
      expect(error.errorCode).toBe(422);
      expect(error.message).toBe("Gênero de música inválido");
    }
  });
  test("should return missing input for empty name", async () => {
    expect.assertions(2);
    const bandBusiness = new BandBusiness(
      bandDatabase as any,
      tokenGenerator as any,
      idGenerator as any
    );
    try {
      await bandBusiness.registerBand("Os AfroSambas", "MPB", "", "token");
    } catch (error) {
      expect(error.errorCode).toBe(422);
      expect(error.message).toBe("Responsável inválido");
    }
  });
  test("should return missing input for empty name", async () => {
    expect.assertions(2);
    const bandBusiness = new BandBusiness(
      bandDatabase as any,
      tokenGenerator as any,
      idGenerator as any
    );
    try {
      await bandBusiness.registerBand("Os AfroSambas", "MPB", "Toquinho", "");
    } catch (error) {
      expect(error.errorCode).toBe(422);
      expect(error.message).toBe("Autenticação inválida");
    }
  });
  test("should return forbiden error for NORMAL role", async () => {
    expect.assertions(3);

    const verify = jest.fn((token: string) => {
      return { id: "123", role: "NORMAL" };
    });
    tokenGenerator = { verify };

    const bandBusiness = new BandBusiness(
      bandDatabase as any,
      tokenGenerator as any,
      idGenerator as any
    );
    try {
      await bandBusiness.registerBand(
        "Os AfroSambas",
        "MPB",
        "Toquinho",
        "token"
      );
    } catch (error) {
      expect(verify).toHaveBeenCalledWith("token");
      expect(error.errorCode).toBe(403);
      expect(error.message).toBe(
        "Você precisa ser um ADMIN para registrar uma banda"
      );
    }
  });
  test("should return success for ADMIN role", async () => {
    const verify = jest.fn((token: string) => {
      return { id: "123", role: "ADMIN" };
    });
    tokenGenerator = { verify };
    const generate = jest.fn(() => "id");
    idGenerator = { generate };
    const registerBand = jest.fn((band: Band) => {});
    bandDatabase = { registerBand };

    const bandBusiness = new BandBusiness(
      bandDatabase as any,
      tokenGenerator as any,
      idGenerator as any
    );
    await bandBusiness.registerBand(
      "Os AfroSambas",
      "MPB",
      "Toquinho",
      "token"
    );
    expect(verify).toHaveBeenCalledWith("token");
    expect(generate).toHaveBeenCalled;
    expect(registerBand).toHaveBeenCalledWith(
      new Band("id", "Os AfroSambas", "MPB", "Toquinho")
    );
  });
});
