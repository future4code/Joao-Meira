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
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
    return response.data.map((user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        };
    });
});
const test = () => __awaiter(void 0, void 0, void 0, function* () {
    const usersArray = yield getUsers();
    console.log("Usuários baixados!");
    const sendNotification = () => __awaiter(void 0, void 0, void 0, function* () {
        const promisesArray = [];
        for (let user of usersArray) {
            promisesArray.push(axios_1.default.post(`${baseUrl}/notifications/send`, {
                subscriberId: user.id,
                message: "Estamos muito felizes de vc ter chegado até aqui! De: JM"
            }));
            console.log(`Notification sent to ${user.name}`);
        }
        yield Promise.all(promisesArray);
        console.log('All notifications sent');
    });
    sendNotification();
});
test();
//# sourceMappingURL=exercise6.js.map