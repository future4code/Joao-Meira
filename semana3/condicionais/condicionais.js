/*

EXERCICIO 1
Explique o que o código faz. Qual o teste que ele realiza? 
Para que tipos de números ele imprime no console "Passou no teste"? 
Para que tipos, a mensagem é "Não passou no teste"?

  RESPOSTA: O código acima analisa a resposta do usuário oferecendo valor falso ou verdadeiro à existencia
  ou não de resto na divisão do número escolhido pelo usuário. Caso não haja resto, o usuário passa no teste,
  caso haja, o usuário não passa. Em outras palavras, podemos dizer que só passa no teste aquele que escolher números
  pares, enquanto os que escolhem números ímpares não passam.

*/


/*
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/








/*
EXERCÍCIO 2
a. Para que serve o código acima?
  RESPOSTA: Para consultar o preço de frutas.

b. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
  RESPOSTA: O preço da fruta Maçã é R$ 2.25

c. Considere que você vá ao mercado com o objetivo de comprar 
2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
  RESPOSTA: R$24,55

d. Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se
retirássemos o break que está logo acima do deafult (o break indicado pelo comentário "BREAK PARA O ITEM d.")?
  RESPOSTA: O preço da fruta  Pêra  é  R$  5

*/


/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    ; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/













/*
Exercícios de escrita de código

EXERCÍCIO 4
a. Crie um programa que receba dois números do usuário através do `prompt` e imprima-os na ordem **decrescente**.
 O que acontece com o seu programa se os 2 números forem iguais? (é só testar e colocar um comentário descrevendo
   o que aconteceu)
   RESPOSTA: os dois números iguais aparecem um depois do outro (no caso, o "num2" na frente do "num")
*/

/*
const num = Number(prompt("Digite um número e aperte enter"))
const num2 = Number(prompt("Digite outra vez um número e aperte enter"))

if(num>num2){
  console.log(num, num2)
} else{
 console.log(num2,num) 
}
*/






/*
b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem **decrescente**. 
O que acontece como seu programa se os 3 números forem iguais? (é só testar e colocar um comentário descrevendo 
  o que aconteceu)
  RESPOSTA: todos eles aparecem
*/

/*
const num = Number(prompt("Digite um número e aperte enter"))
const num2 = Number(prompt("Digite outra vez um número e aperte enter"))
const num3 = Number(prompt("Digite pela terceira vez um número"))

if(num>=num2 && num>num3 && num2>=num3){
  console.log(num, num2, num3)}
  else if(num2>=num && num2>num3 && num>=num3){
  console.log(num2,num, num3)}  else if(num>=num3 && num>num2 && num3>=num2){
    console.log(num, num3, num2)}  else if(num2>=num3 && num2>num && num3>=num){
      console.log(num2, num3, num)}  else if(num3>=num2 && num3>num && num2>=num){
        console.log(num3, num2, num)} else if(num3>=num2 && num3>num && num>=num2){
          console.log(num3, num, num2)} else {
            console.log(num,num2,num3)}
*/









/*
c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, mostre um aviso ao usuário indicando
 que ele deve, ao menos, inserir um número diferente.
*/

/*
const num = Number(prompt("Digite um número e aperte enter"))
const num2 = Number(prompt("Digite outra vez um número e aperte enter"))
const num3 = Number(prompt("Digite pela terceira vez um número"))

if(num>=num2 && num>num3 && num2>=num3){
  console.log(num, num2, num3)}
  else if(num2>=num && num2>num3 && num>=num3){
  console.log(num2,num, num3)}  else if(num>=num3 && num>num2 && num3>=num2){
    console.log(num, num3, num2)}  else if(num2>=num3 && num2>num && num3>=num){
      console.log(num2, num3, num)}  else if(num3>=num2 && num3>num && num2>=num){
        console.log(num3, num2, num)} else if(num3>=num2 && num3>num && num>=num2){
          console.log(num3, num, num2)} else {
            (alert("Digite pelo menos um número diferente!"))}

*/












/*

EXERCÍCIO 5
Vamos criar um programa que classifique os animais dados alguns critérios. 
O primeiro critério de divisão é se eles possuem ossos formando seu esqueleto ou não. 
Caso possuam, são **vertebrados**, caso contrário, **invertebrados**. 
O nosso foco é realizar a classificação só do primeiro caso. Se possuir pelos, entende-se que ele é um mamífero; 
e este pode ser classificado como um **ser humano** ou não (**mamífero não humano**), simplesmente, 
pelo fato dele ser considerado racional ou não. Se não for mamífero, entende-se que ele é uma **ave**, se possuir penas. 
Se não possuir, devemos entender uma característica importante: se ele é um animal terrestre. 
Se não for, diz-se que é um **peixe**; se  for, ele pode ser um **anfíbio** ou um **réptil**. 
Ele será o primeiro (anfíbio), se passar uma parte da vida em ambiente aquático; e será o segundo (réptil), caso contrário.

a. Escreva o diagrama esquemático que melhor represente a árvore condicional do exercício. 
(Coloque a imagem do esquema no drive e gerem um link de compartilhamento público. 
  Coloque este link num comentário durante a resolução deste exercício)

b. Escreva um programa que realize estas perguntas  e indique a classificação final considerada. 
As opções são: ser humano; mamífero não humano; ave; réptil; anfíbio; peixe ou é invertebrado

*/

/*
const vertebrado = prompt("O animal que você quer catalogar tem coluna vertebral, s/n?")
const humano = prompt("O animal que você quer catalogar é racional, s/n?")
const mamifero = prompt("O animal que você quer catalogar tem pelos, s/n?")
const aves = prompt("O animal que você quer catalogar tem penas, s/n?")
const reptil = prompt("O animal que você quer catalogar vive a vida toda na terra, s/n?")
const anfíbio = prompt("O animal que você quer catalogar vive algum ciclo na terra, s/n?")
const peixe = prompt("O animal que você quer catalogar vive a vida toda na água, s/n?")

if(vertebrado==="n"){
  console.log("Seu animal é invertebrado")
}else if(vertebrado==="s" && humano==="s"){
  console.log("Seu animal é um ser humano")
} else if(vertebrado==="s" && humano==="n" && mamifero==="s"){
  console.log("Seu animal é um mamífero não humano")
} else if(vertebrado==="s" && humano==="n" && mamifero==="n" && aves==="s"){
  console.log("Seu animal é uma ave")
} else if(vertebrado==="s" && humano==="n" && mamifero==="n" && aves==="n" && reptil==="s"){
  console.log("Seu animal é um réptil")
} else if(vertebrado==="s" && humano==="n" && mamifero==="n" && aves==="n" && reptil==="n" && anfíbio==="s"){
console.log("Seu animal é um anfíbio")
} else if(vertebrado==="s" && humano==="n" && mamifero==="n" && aves==="n" && reptil==="n" && anfíbio==="n" && peixe==="s"){
  console.log("Seu animal é um peixe")
}
*/









/*
DESAFIO

- Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos

O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que 
pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser dados em dólar (considerar a cotação de U$1,00 = R$4,10)

*/

/*
const nome = prompt("Qual seu nome completo?")
const tdj = prompt("O jogo que você vai assistir é Internacional ou Nacional?")
const edj = prompt("Você quer assistir à final, semi-final ou terceiro lugar?")
const cat = prompt("Qual das 4 categorias de ingresso você deseja: 1, 2, 3 ou 4?")
const qtd = Number(prompt("Quantos ingressos dessa categoria você deseja?"))


console.log("---Dados da Compra---" +"\n" + "Nome do cliente: " + nome + "\n" + "Tipo de Jogo: " + tdj + "\n" + "Etapa do Jogo: " + edj + "\n" + "Categoria: " + cat + "\n" + "Quantidade de Ingressos: " + qtd + " ingressos")


//NACIONAL

if(cat==="4" && edj==="terceiro lugar" && tdj==="Nacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + 170 + "\n" + "Valor total: R$ " + (qtd * 170))
}
else if(cat==="4" && edj==="semi-final" && tdj==="Nacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + 220 + "\n" + "Valor total: R$ " + (qtd * 220))
}

else if(cat==="4" && edj==="final" && tdj==="Nacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + 330 + "\n" + "Valor total: R$ " + (qtd * 330))
}

else if(cat==="3" && edj==="terceiro lugar" && tdj==="Nacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + 330 + "\n" + "Valor total: R$ " + (qtd * 330))
}

else if(cat==="3" && edj==="semi-final" && tdj==="Nacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + 550 + "\n" + "Valor total: R$ " + (qtd * 550))
}

else if(cat==="3" && edj==="final" && tdj==="Nacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + 880 + "\n" + "Valor total: R$ " + (qtd * 880))
}

else if(cat==="2" && edj==="terceiro lugar" && tdj==="Nacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + 440 + "\n" + "Valor total: R$ " + (qtd * 440))
}

else if(cat==="2" && edj==="semi-final" && tdj==="Nacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + 880 + "\n" + "Valor total: R$ " + (qtd * 880))
}

else if(cat==="2" && edj==="final" && tdj==="Nacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + 1320 + "\n" + "Valor total: R$ " + (qtd * 1320))
}

else if(cat==="1" && edj==="terceiro lugar" && tdj==="Nacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + 660 + "\n" + "Valor total: R$ " + (qtd * 660))
}

else if(cat==="1" && edj==="semi-final" && tdj==="Nacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + 1320 + "\n" + "Valor total: R$ " + (qtd * 1320))
}

else if(cat==="1" && edj==="final" && tdj==="Nacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + 1980 + "\n" + "Valor total: R$ " + (qtd * 1980))
}

//INTERNACIONAL

else if(cat==="4" && edj==="terceiro lugar" && tdj==="Internacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + (170*4.1) + "\n" + "Valor total: R$ " + (qtd * (170*4.1)))
}
else if(cat==="4" && edj==="semi-final" && tdj==="Internacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + (220*4.1) + "\n" + "Valor total: R$ " + (qtd * (220*4.1)))
}

else if(cat==="4" && edj==="final" && tdj==="Internacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + (330*4.1) + "\n" + "Valor total: R$ " + (qtd * (330*4.1)))
}

else if(cat==="3" && edj==="terceiro lugar" && tdj==="Internacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + (330*4.1) + "\n" + "Valor total: R$ " + (qtd * (330*4.1)))
}

else if(cat==="3" && edj==="semi-final" && tdj==="Internacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + (550*4.1) + "\n" + "Valor total: R$ " + (qtd * (550*4.1)))
}

else if(cat==="3" && edj==="final" && tdj==="Internacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + (880*4.1) + "\n" + "Valor total: R$ " + (qtd * (880*4.1)))
}

else if(cat==="2" && edj==="terceiro lugar" && tdj==="Internacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + (440*4.1) + "\n" + "Valor total: R$ " + (qtd * (440*4.1)))
}

else if(cat==="2" && edj==="semi-final" && tdj==="Internacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + (880*4.1) + "\n" + "Valor total: R$ " + (qtd * (880*4.1)))
}

else if(cat==="2" && edj==="final" && tdj==="Internacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + (1320*4.1) + "\n" + "Valor total: R$ " + (qtd * (1320*4.1)))
}

else if(cat==="1" && edj==="terceiro lugar" && tdj==="Internacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + (660*4.1) + "\n" + "Valor total: R$ " + (qtd * (660*4.1)))
}

else if(cat==="1" && edj==="semi-final" && tdj==="Internacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + (1320*4.1) + "\n" + "Valor total: R$ " + (qtd * (1320*4.1)))
}

else if(cat==="1" && edj==="final" && tdj==="Internacional"){
  console.log("---Valores---" + "\n" + "Valor do ingresso: R$ " + (1980*4.1) + "\n" + "Valor total: R$ " + (qtd * (1980*4.1)))
}


else {
  (alert("Informações incorretas"))
}

*/