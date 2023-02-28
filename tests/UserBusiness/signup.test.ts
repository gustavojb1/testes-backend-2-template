import { UserBusiness } from "../../src/business/UserBusiness"
import { SignupInputDTO } from "../../src/dtos/userDTO"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("getAll", ()=>{
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("retornar token de login da conta normal", async()=>{
        const input: SignupInputDTO={
            name: "Normal Mock",
            email: "normal1@email.com",
            password: "bananinha"
        }

        const response = await userBusiness.signup(input)

        expect(response).toEqual({token: "token-mock-normal"})
    })
})