"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myOperation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
if (num1 && num2) {
    if (myOperation === 'add') {
        console.log('\x1b[32m', num1 + num2);
    }
    else if (myOperation == 'sub') {
        console.log('\x1b[32m', num1 - num2);
    }
    else if (myOperation == 'mult') {
        console.log('\x1b[32m', num1 * num2);
    }
    else if (myOperation == 'div') {
        console.log('\x1b[32m', num1 / num2);
    }
    else {
        console.log('\x1b[31m', 'deu alguma treta nas operações');
    }
}
else {
    console.log('\x1b[35m', 'tá ');
    console.log('\x1b[32m', '   faltando');
    console.log('\x1b[36m', '             número!');
}
//# sourceMappingURL=exercicio1.js.map