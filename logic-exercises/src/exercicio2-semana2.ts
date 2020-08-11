// O objetivo desse challenge é te fazer pensar como um método
// que a gente usa bastante com strings: `.indexOf`.
// Escreva uma função que simule o seu comportamento
// (sem utilizar esse método na sua implementação), que receba
// uma string `source` e um caracter que se deseja encontrar
// nela `query` e devolva o index em que esse caracter aparece
// pela primeira vez

export function indexOfElement(source: string, query: string) {
  const sourceFormat = source.toLowerCase()
  const queryFormat = query.toLowerCase()

  function searchQuery(sourceFormated: string, index: number, length: number) {
    const verifyQuery: string[] = [];

    for (let i = index; i < index + length; i++) {
      verifyQuery.push(sourceFormated[i]);
    }
    return verifyQuery.join("");
  }

  for (let i: number = 0; i < sourceFormat.length; i++) {
    const queryVerification = searchQuery(sourceFormat, i, queryFormat.length);
    if (queryVerification === queryFormat) {
      return i;
    }
  }
  return -1;
}

console.log(indexOfElement("vi veri veniversum vivus vici", "iversum vi"));
