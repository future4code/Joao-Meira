// Escreva uma função que recebe uma matriz 
// (um array de arrays) que está ordenada em ordem 
// decrescente tanto na linha quanto na coluna, 
// e retorna quantos números negativos tem nessa matriz.


export function negativeNumberCount ( matriz : number[][] ) {

    let negativeNumbersQuantity = 0
    for( let i=0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] < 0){
                negativeNumbersQuantity += 1
            }
        }
    }

    return negativeNumbersQuantity
}