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
exports.createUserEndingPoint = void 0;
const IdGenerator_1 = require("../Classes/IdGenerator");
const Authenticator_1 = require("../Classes/Authenticator");
const UserDataBase_1 = require("../Classes/UserDataBase");
exports.createUserEndingPoint = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idGenerator = new IdGenerator_1.IdGenerator();
        const id = idGenerator.generate();
        const newUser = {
            id: id,
            email: request.body.email,
            name: request.body.name,
            password: request.body.password
        };
        const dataBase = new UserDataBase_1.UserDatabase();
        const validateEmail = dataBase.validateEmail(newUser.email);
        if (!validateEmail) {
            throw new Error("Email inválido!");
        }
        const validatePassword = dataBase.validatePassword(newUser.password);
        if (!validatePassword) {
            throw new Error("A senha deve ter mais de 6 caracteres!");
        }
        yield dataBase.createUser(newUser.id, newUser.email, newUser.name, newUser.password);
        const authenticator = new Authenticator_1.Authenticator();
        const token = authenticator.generateToken({
            id,
        });
        response
            .status(200)
            .send({ token: token });
    }
    catch (error) {
        response
            .status(400)
            .send({
            message: error.message
        });
    }
});
