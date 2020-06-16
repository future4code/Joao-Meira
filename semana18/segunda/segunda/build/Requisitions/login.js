"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginEndingPoint = void 0;
const UserDataBase_1 = require("../Classes/UserDataBase");
const Authenticator_1 = require("../Classes/Authenticator");
exports.loginEndingPoint = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginData = {
            email: request.body.email,
            password: request.body.password
        };
        const dataBase = new UserDataBase_1.UserDatabase();
        const validateEmail = dataBase.validateEmail(loginData.email);
        if (!validateEmail) {
            throw new Error("Email inválido!");
        }
        const user = yield dataBase.getUserByEmail(loginData.email);
        if (user.password !== loginData.password) {
            throw new Error("A senha deve ter mais de 6 caracteres!");
        }
        const authenticator = new Authenticator_1.Authenticator();
        const token = authenticator.generateToken({
            id: user.id
        });
        response
            .status(200)
            .send({ token: "token gerado pelo jwt" });
    }
    catch (error) {
        response
            .status(400)
            .send({
            message: error.message
        });
    }
});
