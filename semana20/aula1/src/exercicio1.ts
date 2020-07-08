//a.

export function sumLenghtAndMultiplication (array : number[]) : any {

    const sum = array.reduce((a,b) => a+b, 0)
    const multiply = array.reduce((a,b) => a*b, 1)
    const lenght = array.length

    return ({
        soma: sum, 
        multiplicação: multiply, 
        quantidade: lenght
    })
}

//b.

export function maxAndMinValue ( array: number[]) : any {

    const minValue = Math.min(...array)
    const maxValue = Math.max(...array)

    return ({
        mínimo: minValue,
        máximo: maxValue
    })
}


console.log(
    maxAndMinValue([1,2,3,4,5]),
    sumLenghtAndMultiplication([1,2,3,4,5])
)