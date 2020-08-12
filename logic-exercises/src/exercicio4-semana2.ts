// Escreva uma função que receba um array de strings e retorne o maior prefixo comum entre
// **todas** as strings.

// O prefixo é definido pelo começo até uma posição qualquer de uma string.
// Por exemplo, na string `"arvore"`, `"a"` seria um prefixo, e `"arvor"` também.

// Caso não exista um prefixo comum, retorne uma string vazia (`""`)

export const findCommonPrefix = (input: string[]) => {
  const prefixesArray: string[] = [];
  for (let i = 0; i < input.length - 1; i++) {
    prefixesArray.push(
      comparingWords(input[i].toLowerCase(), input[i + 1].toLowerCase())
    );
  }

  let finalCommonPrefix: string = "";
  let smallestPrefixSize: number = Infinity;
  for (let i = 0; i < prefixesArray.length - 1; i++) {
    if (
      prefixesArray[i].length <= prefixesArray[i + 1].length &&
      prefixesArray[i].length <= smallestPrefixSize
    ) {
      smallestPrefixSize = prefixesArray[i].length;
      finalCommonPrefix = prefixesArray[i];
    } else if (
      prefixesArray[i] >= prefixesArray[i + 1] &&
      prefixesArray[i + 1].length <= smallestPrefixSize
    ) {
      finalCommonPrefix = prefixesArray[i + 1];
      smallestPrefixSize = prefixesArray[i + 1].length;
    }
    if (prefixesArray[i] === "") {
      return "";
    }
  }
  return finalCommonPrefix;
};

export const comparingWords = (wordA: string, wordB: string) => {
  let commonPrefix: string[] | string = [];

  for (
    let i = 0;
    i < (wordA.length > wordB.length ? wordA.length : wordB.length);
    i++
  ) {
    if (wordA[0] !== wordB[0]) {
      return (commonPrefix = "");
    }
    if (wordA[i] === wordB[i]) {
      commonPrefix.push(wordA[i]);
    } else {
      return commonPrefix.join("");
    }
  }

  return commonPrefix.join("");
};

console.log(findCommonPrefix(["oi", "coração", "coorida", "carro"]));
