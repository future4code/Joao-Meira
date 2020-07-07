// a. Faça uma função que receba uma string e devolva um objeto com as informações: quantos caracteres a string possui, qual seu primeiro caracter e qual seu último caracter

export const stringLengthAndCharacters = (string: string) => {
  const length = string.length;
  const firstCharacter = string[0];
  const lastCharacter = string[string.length - 1];

  return {
    caracteres: length,
    "primeiro caracter": firstCharacter,
    "último caracter": lastCharacter,
  };
}

// b. Faça uma função que receba uma string e devolva um array com seus caracteres. Se o input for `escola`, a saída deve ser `[e, s, c, o, l, a]`

export function stringToArrayCharacter(string: string): string[] {
  const result = string
    .replace(/\s/g, "")
    .split("");

  return result;
}