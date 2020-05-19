"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myOperation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
if (myOperation === 'add') {
    console.log(num1 + num2);
}
else if (myOperation == 'sub') {
    const op = (num1 + num2);
    console.log(num1 - num2);
}
else if (myOperation == 'mult') {
    const op = (num1 + num2);
    console.log(num1 * num2);
}
else if (myOperation == 'div') {
    const op = (num1 + num2);
    console.log(num1 / num2);
}
else {
    console.log('deu alguma treta');
}
//# sourceMappingURL=exercicio1.js.map