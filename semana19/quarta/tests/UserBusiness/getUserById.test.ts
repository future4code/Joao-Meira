import { UserBusiness } from "../../src/business/UserBusiness";
import { User, stringToUserRole, UserRole } from "../../src/model/User";


describe("testing getUserById business", () => {
  let userDataBaseMock = {};
  let hashGeneratorMock = {};
  let tokenGeneratorMock = {};
  let idGeneratorMock = {};

  test("user not found", async () => {
    expect.assertions(2)

    const getUserById = jest.fn()
    userDataBaseMock = { getUserById }

    const userBusinessMock = new UserBusiness(
        userDataBaseMock as any,
        hashGeneratorMock as any,
        tokenGeneratorMock as any,
        idGeneratorMock as any
    )

    try{
        await userBusinessMock.getUserById("")
    } catch(error){
        expect(error.errorCode).toBe(404)
        expect(error.message).toBe("Usuário não encontrado")
    }
    });

  test("getUserById success", async () => {

    const getUserById = jest.fn(( id : string ) => new User(
        "2345678",
        "Usuário teste",
        "teste@gmail.com",
        "hashpassword",
        stringToUserRole("NORMAL")
    ))

    const idMock = "2345678"
    userDataBaseMock = { getUserById }

    const userBusinessMock = new UserBusiness(
        userDataBaseMock as any,
        hashGeneratorMock as any,
        tokenGeneratorMock as any,
        idGeneratorMock as any
    )

    const resultMock = await userBusinessMock.getUserById(idMock)
    
    expect(getUserById).toHaveBeenCalledWith(idMock)
    expect(resultMock).toStrictEqual({
        id: "2345678",
        name: "Usuário teste",
        email: "teste@gmail.com",
        role: UserRole.NORMAL
    })
    });
});
