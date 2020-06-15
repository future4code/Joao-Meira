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
exports.UserDatabase = void 0;
const dotenv_1 = require("../connection/dotenv");
class UserDatabase {
    constructor() {
        this.connection = dotenv_1.connection;
    }
    createUser(id, email, name, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection
                .insert({
                id,
                name,
                password,
                email
            })
                .into(UserDatabase.TABLE_NAME);
        });
    }
    validateEmail(email) {
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const validation = regexp.test(email);
        return validation;
    }
    validatePassword(password) {
        const regexp = new RegExp(/(?=.{6,})/);
        const validation = regexp.test(password);
        return validation;
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.connection
                .select("*")
                .from(UserDatabase.TABLE_NAME)
                .where({ email });
            return user[0];
        });
    }
}
exports.UserDatabase = UserDatabase;
UserDatabase.TABLE_NAME = "user_info";
