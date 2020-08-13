// Você é um ladrão profissional de casas se planejando
// para roubar algumas casas ao longo de uma rua. Cada casa
// tem uma quantidade de dinheiro guardada, e o que te
// impede de roubar todas elas é o fato de que elas tem um
// sistema de segurança interligado, que irá **alertar a
// polícia automaticamente se duas casas adjacentes forem
// roubadas na mesma noite.**

// Dada uma lista representando o dinheiro em cada casa,
// determine o valor **máximo** a ser roubado
// **sem alertar a polícia**.

export function whichToSteal(input: number[]) {
    if(input.length === 1){
        return input[0]
    }
    if(input.length === 2){
        return input[0] > input[1] ? input[0] : input[1] 
    }

    let evenStartValue = 0
    let oddStartValue = 0
  for (let i = 0; i < input.length; i= i + 2) {
    evenStartValue = evenStartValue + input[i]
  }
  for (let i = 1; i < input.length; i = i + 2) {
    oddStartValue = oddStartValue + input[i]
  }
  console.log(oddStartValue, evenStartValue)
  if(evenStartValue > oddStartValue){
      return evenStartValue
  } else{
    return oddStartValue
  }
}

console.log(whichToSteal([10, 5, 10]))