"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const listName = 'tarefas.txt';
const task = process.argv[2];
const paragraph = '\n';
if (!!task) {
    try {
        fs.appendFileSync(listName, task, 'utf8');
        fs.appendFileSync(listName, paragraph, 'utf8');
        console.log("\x1b[1m", `tarefa ${task} adicionada com sucesso!`);
    }
    catch (error) {
        console.error(error);
    }
}
else {
    console.log('\x1b[7m', 'faltou algum argumento, consagrado');
}
//# sourceMappingURL=exercicio2.js.map