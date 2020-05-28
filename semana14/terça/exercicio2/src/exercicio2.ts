import * as fs from 'fs'

const listName: string = 'tarefas.txt';
const task: string = process.argv[2];
const paragraph: string = '\n'


if(!!task){
    try{
        fs.appendFileSync(listName, task, 'utf8');
        fs.appendFileSync(listName, paragraph, 'utf8');
        console.log("\x1b[1m", `tarefa ${task} adicionada com sucesso!`)
    } catch(error) {
        console.error(error)
    }
} else {
    console.log('\x1b[7m', 'faltou algum argumento, consagrado')
}