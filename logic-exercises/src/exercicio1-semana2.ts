// Implemente uma função que receba um array (ordenado ou não) com números de 1 a 100. 
// Você sabe que, nesse array, está faltando apenas um número dentro desse intervalo. 
// A sua função deve retornar o número faltante. 
// Há dois exemplos abaixo com o array ordenado para facilitar o entendimento da questão. 
// Entretanto, não assuma que ele esteja ordenado para implementar a função!


export function findMissingNumber (numbersArray : number[]) : number {
    const orderedArray = numbersArray.sort((a, b) => a - b)

    let missingNumber : number = 0

    for (let number of orderedArray) {
        if(number === orderedArray[number - 2]){
            missingNumber = number - 1
            break
        }
    }

    return missingNumber
}
