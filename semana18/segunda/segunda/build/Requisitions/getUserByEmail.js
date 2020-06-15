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
exports.getUserByEmailEndingPoint = void 0;
const UserDataBase_1 = require("../Classes/UserDataBase");
exports.getUserByEmailEndingPoint = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataBase = new UserDataBase_1.UserDatabase();
        const userInfo = yield dataBase.getUserByEmail(request.body.email);
        if (!userInfo) {
            throw new Error("Usuário não encontrado!");
        }
        response
            .status(200)
            .send(userInfo);
    }
    catch (error) {
        response
            .status(400)
            .send({
            message: error.message
        });
    }
});
