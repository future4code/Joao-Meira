import { UserBusiness } from "../../src/business/UserBusiness";
import { User, stringToUserRole, UserRole } from "../../src/model/User";


describe("testing getAllUsers business", () => {
  let userDataBaseMock = {};
  let hashGeneratorMock = {};
  let tokenGeneratorMock = {};
  let idGeneratorMock = {};

  test("error if user not admin", async () => {
    expect.assertions(2)

    const userBusinessMock = new UserBusiness(
        userDataBaseMock as any,
        hashGeneratorMock as any,
        tokenGeneratorMock as any,
        idGeneratorMock as any
    )
    const roleMock = "NORMAL"
    try{
        await userBusinessMock.getAllUsers(roleMock)
    } catch(error){
        expect(error.errorCode).toBe(403)
        expect(error.message).toBe("Você não é um administrador")
    }
    });

  test("getAllUsersSuccess success", async () => {

    const getAllUsers = jest.fn(() => [
        new User(
        "2345678",
        "Usuário teste",
        "teste@gmail.com",
        "hashpassword",
        stringToUserRole("ADMIN")
    ),
    new User(
        "12345",
        "Usuário teste",
        "teste@gmail.com",
        "hashpassword",
        stringToUserRole("ADMIN")
    )
])

    const roleMock = "ADMIN"
    userDataBaseMock = { getAllUsers }

    const userBusinessMock = new UserBusiness(
        userDataBaseMock as any,
        hashGeneratorMock as any,
        tokenGeneratorMock as any,
        idGeneratorMock as any
    )

    const resultMock = await userBusinessMock.getAllUsers(roleMock)
    
    expect(getAllUsers).toHaveBeenCalledTimes(1)
    expect(resultMock).toEqual([
        {
            id: "2345678",
            name: "Usuário teste",
            email: "teste@gmail.com",
            role: UserRole.ADMIN
        },
        {
            id: "12345",
            name: "Usuário teste",
            email: "teste@gmail.com",
            role: UserRole.ADMIN
        }
    ])
    });
});
