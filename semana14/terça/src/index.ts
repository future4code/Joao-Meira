// type person = {
//   name: string
// }

// function createPerson(name: string): person {
// 	return {name: name} 
// } 

// const myPerson2 = createPerson("Robson");

// console.log(myPerson2);

import * as fs from 'fs'

const listName: string = 'tarefas.txt';
const task: string = `\n ${process.argv[2]}`;


try{
    fs.appendFileSync(listName, task, 'utf8');
    console.log(task)
} catch(error) {
    console.error(error)
}