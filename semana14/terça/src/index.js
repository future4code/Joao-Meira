"use strict";
// type person = {
//   name: string
// }
exports.__esModule = true;
// function createPerson(name: string): person {
// 	return {name: name} 
// } 
// const myPerson2 = createPerson("Robson");
// console.log(myPerson2);
var fs = require("fs");
var listName = 'tarefas.txt';
var task = "\n " + process.argv[2];
try {
    fs.appendFileSync(listName, task, 'utf8');
    console.log(task);
}
catch (error) {
    console.error(error);
}
