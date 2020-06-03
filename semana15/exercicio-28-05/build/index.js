"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createEvent_1 = require("./createEvent");
const getEvents_1 = require("./getEvents");
const moment_1 = __importDefault(require("moment"));
const actionType = process.argv[2];
switch (actionType) {
    case "GET_ALL_EVENTS":
        getEvents_1.getEvents();
        break;
    case "CREATE_EVENT":
        createEvent_1.createEvent(process.argv[3], process.argv[4], moment_1.default(process.argv[5], "DD/MM/YYYY").format("L"));
        break;
    default:
        console.log('Ação não encontrada!');
}
//# sourceMappingURL=index.js.map