// Escreva uma função que recebe um array **não vazio** de números.
// Todos os números do array aparecem 2 vezes,
// com excessão de um. Encontre (e retorne) esse número.

export function findSolitaryNumber(input: number[]) {

  let appearsTimes = 0;

  for (let i = 0; i < input.length; i++) {
      appearsTimes = 0
    for (let j = 0; j < input.length; j++) {
      if (input[i] === input[j]) {
        appearsTimes = appearsTimes + 1;
      }
      if (input[i] === input[j] && appearsTimes === 2) {
        break;
      }
    }
    if(appearsTimes === 1){
        return input[i]
    }
  }
}

console.log(findSolitaryNumber([4, 4, 2, 2, 3, 1, 1]));
