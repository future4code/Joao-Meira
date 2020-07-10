import { UserBusiness } from "../../src/business/UserBusiness";
import { User, stringToUserRole } from "../../src/model/User";

describe("Testing UserBusiness.signup", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Should return 'Missing input' for empty name", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.signup("", "astrodev@gmail.com", "12345677", "ADMIN");
    } catch (err) {
      expect(err.errorCode).toBe(422);
      expect(err.message).toBe("Nome inválido");
    }
  });

  test("Should return 'Missing input' for empty email", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.signup("Astrodev", "", "12345677", "ADMIN");
    } catch (err) {
      expect(err.errorCode).toBe(422);
      expect(err.message).toBe("Email inválido");
    }
  });

  test("Should return 'Missing input' for empty password", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.signup("Astrodev", "astrodev@gmail.com", "", "ADMIN");
    } catch (err) {
      expect(err.errorCode).toBe(422);
      expect(err.message).toBe("Password inválido");
    }
  });

  test("Should return 'Missing input' for empty role", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.signup(
        "Astrodev",
        "astrodev@gmail.com",
        "1234567",
        ""
      );
    } catch (err) {
      expect(err.errorCode).toBe(422);
      expect(err.message).toBe("Tipo de usuário inválido");
    }
  });

  test("Should return 'Invalid email' for invalid email", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.signup(
        "Astrodev",
        "astrodevgmail.com",
        "1234567",
        "ADMIN"
      );
    } catch (err) {
      expect(err.errorCode).toBe(422);
      expect(err.message).toBe("Email inválido");
    }
  });

  test("Should return 'Invalid password' for invalid password", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.signup(
        "Astrodev",
        "astrodev@gmail.com",
        "12345",
        "superadmin"
      );
    } catch (err) {
      expect(err.errorCode).toBe(422);
      expect(err.message).toBe("Password inválido");
    }
  });

  test("Should return 'Invalid role' for invalid role", async () => {
    expect.assertions(2);
    try {
      const generate = jest.fn(() => "id");
      idGenerator = { generate };

      const hash = jest.fn(() => "hash");
      hashGenerator = { hash };

      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.signup(
        "Astrodev",
        "astrodev@gmail.com",
        "1234567",
        "superadmin"
      );
    } catch (err) {
      expect(err.errorCode).toBe(422);
      expect(err.message).toBe("Tipo de usuário inválido");
    }
  });

  test("Should return the accessToken in success", async () => {
    const generateId = jest.fn(() => "id");
    idGenerator = { generate: generateId };

    const hash = jest.fn(() => "hash");
    hashGenerator = { hash };

    const generateToken = jest.fn(() => "token");
    tokenGenerator = { generate: generateToken };

    const createUser = jest.fn((user: User) => {});
    userDatabase = { createUser };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const result = await userBusiness.signup(
      "Astrodev",
      "astrodev@gmail.com",
      "1234567",
      "ADMIN"
    );

    expect(result.accessToken).toBe("token");
    expect(hash).toHaveBeenCalledWith("1234567");
    expect(generateId).toHaveBeenCalledTimes(1);
    expect(generateToken).toHaveBeenCalledWith({ id: "id", role: "ADMIN" });
    expect(createUser).toHaveBeenCalledWith(
      new User(
        "id",
        "Astrodev",
        "astrodev@gmail.com",
        "hash",
        stringToUserRole("ADMIN")
      )
    );
  });
});
