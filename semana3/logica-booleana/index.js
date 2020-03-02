

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)

console.log("e. ", typeof resultado)


/* 

1 - Leia o código abaixo. Indique todas as mensagens impressas no console.

index.js:6 a.  false
index.js:9 b.  false
index.js:12 c.  true
index.js:15 d.  false
index.js:17 e.  boolean

*/


let array
    console.log('I. ', array)
    
    array = null
    console.log('II. ', array)
    
    
    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('III. ', array.length)
    
    let i = 0
    console.log('IV. ', array[i], " e ", array[i+1])
    
    array[i+1] = 19
    const valor = array[i+6]
    console.log('V. ', array[i+1], " e ", valor)
    
    i+=1
    array[i] = array[i-1]
    console.log('VI. ', array[i])
    
    i = array.length - 1
    array[i] = array[i-3]
    const resultadoC = array[i]%array[1]
    console.log('VII. ', resultadoC)


/*

2. Leia o código abaixo.
a) Array e’ uma lista composta de varias informacoes em texto ou numero.
b) 0
c) Atraves da propriedade “length”, como em “console.log(nomeVariavel.length)”
d)

index.js:34 I.  undefined
index.js:37 II.  null
index.js:41 III.  11
index.js:44 IV.  3  e  4
index.js:48 V.  19  e  9
index.js:52 VI.  3
index.js:57 VII.  1

*/



// EXERCÍCIO DE ESCRITA DE CÓDIGO

//a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

const kelvin = Number((77-32)*5/9 + 273.15)
console.log(kelvin + " K")


//b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
const fahrenheit = Number([80] * [9/5] + 32)
console.log(fahrenheit + " °F")

//c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
const kEc = Number(30 + 273.15)
const fEc = Number([30] * [9/5] + 32)
console.log(fEc + " °F", kEc + " K" )





//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.

let temp = Number(prompt ("Insira o valor em Celsius"))


const fahrenheit = Number([temp] * [9/5] + 32)
console.log(fahrenheit)

const kelvin = Number(temp + 273.15)
console.log(kelvin)



//Faça um programa que faça 5 perguntas para o usuário (pode ser criativo nesta parte). Imprima-as com as respostas no console da seguinte forma:


const nome = prompt("Qual eh seu nome?")
console.log("Qual eh seu nome?" + "\n" + "Resposta: ", nome)

const rhetoric = prompt("Ola " + nome + " ! Voce gosta de charadas?")
console.log("Ola ", nome, "! Voce gosta de charadas?" + "\n" + "Resposta: ", rhetoric)

const riddle = prompt("Gostando ou n, ai vai uma charada:" + "\n" + "Que criatura pela manha tem quatro pes, ao meio dia dois e pela noite tem tres?")
console.log("Que criatura tem quatro pes pela manha, ao meio dia dois e ao anoitecer tem tres?" + "\n" + "Resposta: " + riddle)

const repeat = prompt("Gostaria de outra charada?")
console.log("Gostaria de outra charada?" + "\n" + "Resposta: " + repeat)

const riddle2 = prompt("Mais uma vez, te oferecerei a charada: " + "\n" + "Num comodo escuro um homem procura por algo que pode ser encontrado, outro busca o que n pode ser encontrado e um terceiro busca por algo que n eh possivel encontrar e exclama 'ENCONTREI!'" + "\n" + "Quem sao estes homens?")
console.log("Num comodo escuro um homem procura por algo que pode ser encontrado, outro busca o que n pode ser encontrado e um terceiro busca por algo que n eh possivel encontrar e exclama 'ENCONTREI!'. Quem sao estes homens?" + "\n" + "Resposta: " + riddle2)

/*
Qual eh seu nome?
Resposta:  João
index.js:6Ola  João ! Voce gosta de charadas?
Resposta:  sim
index.js:9 Que criatura tem quatro pes pela manha, ao meio dia dois e ao anoitecer tem tres?
Resposta: o ser humano
index.js:12 Gostaria de outra charada?
Resposta: sim
index.js:15 Num comodo escuro um homem procura por algo que pode ser encontrado, outro busca o que n pode ser encontrado e um terceiro busca por algo que n eh possivel encontrar e exclama 'ENCONTREI!'. Quem sao estes homens?
Resposta: um cientista, um filósofo e um religioso
*/


// 3. a) e b)


const consumo = prompt("Qual o consumo em kw/h da sua residencia?")

const desconto = prompt("Voce possui desconto? Se sim, quantos %?")
console.log("Voce tera " + desconto + "% de desconto")

const conta = Number(0.05 * consumo)
console.log("O valor do seu consumo eh de " + conta + " reais" )

const aSerPago = Number(conta - (conta*desconto) / 100)
console.log("O valor total a ser pago sera de " + aSerPago)


/*
index.js:156 Voce tera 15% de desconto
index.js:159 O valor do seu consumo eh de 14 reais
index.js:162 O valor total a ser pago sera de 11.9
*/