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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";
const arg1 = process.argv[2];
const arg2 = process.argv[3];
const createUser = (name, email) => __awaiter(void 0, void 0, void 0, function* () {
    axios_1.default.put(`${baseUrl}/subscribers`, {
        name: name,
        email: email,
    });
});
const test = () => __awaiter(void 0, void 0, void 0, function* () {
    if (arg1 && arg2) {
        try {
            yield createUser(arg1, arg2);
            console.log(`Usuário ${arg1} - ${arg2} cadastrado!`);
        }
        catch (error) {
            console.error(error);
        }
    }
});
test();
//# sourceMappingURL=exercise7.js.map