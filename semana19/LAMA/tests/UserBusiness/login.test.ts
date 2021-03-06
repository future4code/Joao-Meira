import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole } from "../../src/model/User";

describe("Testing UserBusiness.login", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Should return 'Missing input' for empty email", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.login("", "123456");
    } catch (err) {
      expect(err.errorCode).toBe(422);
      expect(err.message).toBe("Email ou senha inválido");
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

      await userBusiness.login("saitama@gmail.com", "");
    } catch (err) {
      expect(err.errorCode).toBe(422);
      expect(err.message).toBe("Email ou senha inválido");
    }
  });

  test("Should return 'User not found' when there is no user with the provided email", async () => {
    expect.assertions(3);

    const getUserByEmail = jest.fn((email: string) => {});
    userDatabase = { getUserByEmail };

    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.login("no-user@gmail.com", "123456");
    } catch (err) {
      expect(getUserByEmail).toHaveBeenCalledWith("no-user@gmail.com");
      expect(err.errorCode).toBe(404);
      expect(err.message).toBe("Este usuário não existe");
    }
  });

  test("Should return 'Invalid password' for invalid password", async () => {
    expect.assertions(4);
    const getUserByEmail = jest.fn((user: User) => {
      return new User(
        "id",
        "saitama",
        "saitama@gmail.com",
        "hash",
        UserRole.ADMIN
      );
    });
    userDatabase = { getUserByEmail };

    const compareHash = jest.fn(() => false);
    hashGenerator = { compareHash };

    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.login("saitama@gmail.com", "123456");
    } catch (err) {
      expect(getUserByEmail).toHaveBeenCalledWith("saitama@gmail.com");
      expect(compareHash).toHaveBeenCalledWith("123456", "hash");
      expect(err.errorCode).toBe(422);
      expect(err.message).toBe("Email ou senha incorretos");
    }
  });

  test("Should return the accessToken in success", async () => {
    const getUserByEmail = jest.fn((user: User) => {
      return new User(
        "id",
        "saitama",
        "saitama@gmail.com",
        "hash",
        UserRole.ADMIN
      );
    });
    userDatabase = { getUserByEmail };

    const compareHash = jest.fn(() => true);
    hashGenerator = { compareHash };

    const generateToken = jest.fn(() => "token");
    tokenGenerator = { generate: generateToken };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const result = await userBusiness.login("saitama@gmail.com", "123456");

    expect(getUserByEmail).toHaveBeenCalledWith("saitama@gmail.com");
    expect(compareHash).toHaveBeenCalledWith("123456", "hash");
    expect(generateToken).toHaveBeenCalled();
    expect(result.accessToken).toBe("token");
  });
});
