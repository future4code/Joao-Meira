/*
EXERCÍCIO 1
O que o código abaixo está fazendo? Qual o resultado impresso no console?
    RESPOSTA: está imprimindo no console o valor final da soma de todos os números que foram criados pela soma i + 1, até 14. O valor final impresso no console foi 105. 
    
    adicionado à posição 0  de "soma", 
    até que seja alcançada a posição 15.
*/

/*
let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)
*/






/*
EXERCÍCIO 2
Leia o código abaixo:
a. O que o comando .push faz?
  RESPOSTA: adiciona elementos à array alvo.

b. Qual o valor impresso no console?
  RESPOSTA: (4) [10, 15, 25, 30]

c. Qual seria imprimido no console se a variável numero tivesse o valor de 3? E se tivesse o valor de 4?
  RESPOSTA: Se tivesse o valor de 3, seria imprimido (6) [12,  15, 18, 21, 27, 30]; se o tivesse sido o valor 4, seria imprimido [12]


*/

/*

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 4
for(const item of lista){
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)
*/







/*

**Exercícios de escrita de código**
EXERCICIO 3

Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.

a. Escreva um programa que devolva o maior e o menor números contidos no array original
*/
/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = array[0]
let menor = array[0]

for(let i=0; i<array.length; i++){
  const numero=array[i]

  if(numero>maior){
    maior = numero
  }
  if(numero<menor){
    menor = numero
  }
}

console.log(menor + "\n" + maior)
*/



/*
b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.
*/

/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const back = []
const divisor = 10

for(const numero of array){
  x=numero/divisor
    back.push(x)
  

}

console.log(back)
*/


/*
c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.
*/
/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const back = []
const divisor = 2

for(const numero of array){
  if(numero%divisor===0){
    back.push(numero)
  }

}
console.log(back)
*/


/*
d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: 
"O elemento do índex i é: numero"
*/


/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const back = []
let i = 0

for(let number of array){
  i<array.length
  number = "O elemento do índex " + i + " é " + number
  back.push(number)
  console.log(number)
  i=i+1
}
*/





//-------------------------DESAFIO------------------------
//desafio1
/*
RESPOSTA: sendo o número digitado pelo usuário o valor de quantidadeTotal, e tendo 
"while" a condição de repetir até que quantidadeAtual chegue à quantidadeTotal, e também
levando-se em conta que a quantidadeAtual será somada a + 1 a cada ciclo; sabemos que serão 5 ciclos.
Uma vez que 0 consta como string em "linha+='0'", os números impressos serão uma sequência de zeros
a cada ciclo.
Contudo, é importante reparar que o console.log(linha) encontra-se antes da adição "quantidadeAtual++".
Sendo assim, teremos 4 ciclos imprimidos no console, que mostrarão os números: 0, 00, 000 e 0000
*/
/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
*/








//desafio 2

/*
let escolha = Number(prompt("Escolha um número!"))
console.log("Vamos jogar!")

let adivinha = Number(prompt("Chute um número!"))
console.log("O número chutado foi: <" + adivinha + ">")

let errou = true

let tentativas = []


while (errou){
  if(adivinha !== escolha){
    tentativas.push(adivinha)

    if(adivinha>escolha){
      console.log("Errou. O número escolhido é menor")
      adivinha = Number(prompt("Chute outro número!"))
      }

    else if(adivinha<escolha){
      console.log("Errou. O número escolhido é maior")
      adivinha = Number(prompt("Chute outro número!"))
     }
  }

  else{
  errou=false
  console.log("Acertou")
  console.log("O número de tentativas foi : <" + tentativas.length + ">")
  }

}

*/






//Desafio 3

/*
let random =  Math.floor((Math.random() * 100) + 1)
console.log("Vamos jogar!")

let adivinha = Number(prompt("Chute um número!"))
console.log("O número chutado foi: <" + adivinha + ">")

let errou = true

let tentativas = []


while (errou){
  if(adivinha !== random){
    tentativas.push(adivinha)

    if(adivinha>random){
      console.log("Errou. O número escolhido é menor")
      adivinha = Number(prompt("Chute outro número!"))
      }

    else if(adivinha<random){
      console.log("Errou. O número escolhido é maior")
      adivinha = Number(prompt("Chute outro número!"))
     }
  }

  else{
  errou=false
  console.log("Acertou")
  console.log("O número de tentativas foi : <" + tentativas.length + ">")
  }

}
*/