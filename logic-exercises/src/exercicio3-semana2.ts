// Escreva uma função que recebe uma string que pode conter somente os seguintes caracteres:
// `'('`,  `')'`,  `'['`,  `']'`,  `'{'`,  `'}'` , e retorna `true` para uma string válida, e
// `false` para uma inválida.

// Uma string é **válida** se:

// 1. Parênteses (ou chaves, ou colchetes) abertos devem ser fechados pelo mesmo tipo de parênteses
// (ou chaves, ou colchetes).
// 2. Parênteses (ou chaves, ou colchetes) abertos devem ser fechados na mesma ordem que foram abertos.

// Obs. Uma string vazia é considerada **válida**.

export function checkingParentheses(input: string) {
  const arrayOfOpeningParantheses: string[] = [];
  const arrayOfOpeningBraces: string[] = [];
  const arrayOfOpeningBrakets: string[] = [];
  const arrayOfClosingBrakets: string[] = [];
  const arrayOfClosingBraces: string[] = [];
  const arrayOfClosingParantheses: string[] = [];

  for (let i = 0; i < input.length; i++) {
    if (
        arrayOfClosingParantheses.length > arrayOfOpeningParantheses.length ||
        arrayOfClosingBraces.length > arrayOfOpeningBraces.length ||
        arrayOfClosingBrakets.length > arrayOfOpeningBrakets.length
        ) {
      return false;
    }
    switch (input[i]) {
      case "{":
        arrayOfOpeningBraces.push(input[i]);
        break;
      case "}":
        arrayOfClosingBraces.push(input[i]);
        break;
      case "(":
        arrayOfOpeningParantheses.push(input[i]);
        break;
      case ")":
        arrayOfClosingParantheses.push(input[i]);
        break;
      case "[":
        arrayOfOpeningBrakets.push(input[i]);
        break;
      case "]":
        arrayOfClosingBrakets.push(input[i]);
        break;
      default:
        return false;
    }
  }
  if (
      arrayOfOpeningBraces.length === arrayOfClosingBraces.length &&
      arrayOfOpeningBrakets.length === arrayOfClosingBrakets.length &&
      arrayOfOpeningParantheses.length === arrayOfClosingParantheses.length 
      ) {
    return true;
  }
  if (input === "") {
    return true;
  }
  return false;
}

console.log(checkingParentheses("[}"));
