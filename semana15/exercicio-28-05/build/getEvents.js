"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvents = void 0;
const eventsList = require("../events.json");
exports.getEvents = () => {
    try {
        eventsList.map(event => {
            console.log("\x1b[1m", `
            Atividade: ${event.name}
            Descrição: ${event.description}
            Data: ${event.date}
            `);
        });
    }
    catch (error) {
        console.log(error);
    }
};
//# sourceMappingURL=getEvents.js.map