export {}

const myOperation: string = process.argv[2];
const num1: number = Number(process.argv[3]);
const num2: number = Number(process.argv[4]);

    if(myOperation === 'add'){
         console.log(num1 + num2)
    } else if (myOperation == 'sub') {
        const op = (num1 + num2)
         console.log(num1 - num2)
    } else if (myOperation == 'mult') {
        const op = (num1 + num2)
         console.log(num1 * num2)
    } else if (myOperation == 'div') {
        const op = (num1 + num2)
         console.log(num1 / num2)
    } else {console.log('deu alguma treta')}