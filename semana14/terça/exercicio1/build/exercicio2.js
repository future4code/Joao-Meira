"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const listName = 'tarefas.txt';
const task = `\n ${process.argv[2]}`;
try {
    fs.appendFileSync(listName, task, 'utf8');
    console.log(task);
}
catch (error) {
    console.error(error);
}
//# sourceMappingURL=exercicio2.js.map