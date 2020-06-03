"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = void 0;
const moment_1 = __importDefault(require("moment"));
const fs = __importStar(require("fs"));
const eventsList = require("../events.json");
function createEvent(eventName, eventDescription, eventDate) {
    const newEvent = {
        name: eventName,
        description: eventDescription,
        date: eventDate,
    };
    if (eventName && eventDescription && eventDate && eventDate !== "Invalid date") {
        try {
            eventsList.push(newEvent);
            fs.writeFileSync('events.json', JSON.stringify(eventsList), 'utf8');
            console.log("\x1b[32m", `O evento ${eventName} no dia ${eventDate} foi criado com sucesso!`);
        }
        catch (error) {
            console.error(error);
        }
    }
    else if (eventDate < moment_1.default().format("L")) {
        console.log("\x1b[31m", `Data inválida. Digite uma data igual ou posterior a ${moment_1.default().format("L")}`);
    }
    else {
        console.log("\x1b[31m", "Confira os dados do evento. Alguma informação está faltando!");
    }
}
exports.createEvent = createEvent;
//# sourceMappingURL=createEvent.js.map