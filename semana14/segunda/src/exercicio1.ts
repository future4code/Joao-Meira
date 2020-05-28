function operations(num1: number, num2: number):void {
    let sum = num1 + num2
    let subtraction = num1 > num2 ? num1 - num2 : num2 - num1
    let multiply = num1 * num2
    let bigger =  num1 > num2 ? num1 : num2
    if(num1 === num2){
        return console.log('a soma é ' + sum,
        ', a subtração é ' + subtraction,
        ', a multiplicação é ' + multiply,
        ' e os números são iguais')    
    } else {
        return console.log('a soma é ' + sum,
        ', a subtração é ' + subtraction,
        ', a multiplicação é ' + multiply,
        ' e o número maior é ' + bigger)
    }
}

operations(5, 6)
operations(10, 6)
operations(6, 15)
operations(6, 6)