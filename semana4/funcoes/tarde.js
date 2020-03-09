/*EXERCÍCIO 1

Leia o código abaixo:
*/
/*
    const minhaFuncao = (quantidade) => {
    	const array = []
    	for(let i = 0; i < quantidade; i+=2) {
    			for(let j = 0; j < i; j++) {
    				array.push(j)
    			}
    	}
    	return array
    }
	
	resultado = minhaFuncao(8)
	console.log(resultado)
	*/
/*
a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
    resultado será igual a []

b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)
	resultado será = [0, 1, 0, 1, 2, 3]

c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
	resultado será = [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]
*/





/*
EXERCÍCIO 2
Leia o código abaixo:
*/
/*
    let arrayDeNomes = [1, 2, 3, 4, 5];
    
    const funcao = (lista, nome) => {
      for (let i = 0; i < lista.length; i++) {
        if (lista[i] === nome) {
          return i;
        }
      }
    };
    
    console.log(funcao(arrayDeNomes, 1));
    console.log(funcao(arrayDeNomes, 2));
	console.log(funcao(arrayDeNomes, 3));
	*/
/*
a. Explicite quais são as saídas impressas no console
	São impressos os número 0, 2, e undefined


b. O código funcionaria se a `lista` fosse um array de números (ao invés de um array de `string`)  e o `nome` fosse um número, ao se chamar a função? Justifique sua resposta.
	O códido funcionaria, desde que os números das arrays combinassem com a posição que eles ocupam, pois, caso contrário, o resultado seria undefined (já que a lista[i] === nome, daria dois valores diferentes).  
*/





/*
EXERCÍCIO 3
O código abaixo mostra uma função que recebe um array e devolve outro array. Explique rapidamente o que ela faz e sugira um nome melhor para ela!
*/
/*
    function metodo(array) {
      let resultadoA = 0;
      let resultadoB = 1;
      let arrayFinal = [];
    
      for (let x of array) {
        resultadoA += x;
        resultadoB *= x;
      }
    
      arrayFinal.push(resultadoA);
      arrayFinal.push(resultadoB);
      return arrayFinal;
	}

	let misterio = metodo([3, 4])
	console.log(misterio)
*/

/*
	Ela modifica alternadamente, o resultado A e o resultado B, sendo que A somará e B multiplicará os valores atribuídos à equação quando invocada.
	Quando terminar de percorrer os valores de cada um dos elementos, a função
	adiciona à "arrayFinal" os valores finais de resultadoA e resultadoB. Na prática isso resulta em uma array que contém o valor da soma e 
	da multiplicação dos números contidos na array. Um nome possível à função seria "somarMultiplicarElementos".
	*/





/*
	EXERCÍCIO 4
Escreva as funções explicadas abaixo:

a. A função deve receber um número correspondente aos "anos humanos" que um cachorro tem e calcular a "idade de cachorro" dele. Considere que 1 ano humano equivale a 7 anos de cachorro
/*
let calcularIdadeCatioro = (idadeHumano) =>
{
	idadeCatioro = idadeHumano * 7
	return idadeCatioro
}

let catioro = calcularIdadeCatioro(4)

console.log(catioro)
*/
/*
b.  Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), o endereço (`string`) e um `boolean` que representa 
se é estudante ou não. Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
*/

/*
let compilarInfo = (nome, idade, endereço, estudante) =>
{
	if (estudante===false){
		infoFinal = ["Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereço + " e não sou estudante."]
		console.log(infoFinal)

	} else
	{
	infoFinal = ["Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereço + " e sou estudante."]
	console.log(infoFinal)
	}
}

let minhaInfo = compilarInfo("João Henrique", "32", "Viçosa", true)
*/




/*
EXERCÍCIO 5

O propósito desse exercício é que você determine a qual século um ano pertence. Para isso, considere as seguintes afirmações:

1. A sua função só precisa funcionar entre os anos 1000dc até 2020dc (se você quiser, pode implementar para um intervalo maior)
2. Ela deve retornar uma `string` com a mensagem: `O ano [ANO] pertence ao século [SÉCULO EM ALGARISMOS ROMANOS]`
    - Algarismos Romanos
3. As regras de século normalmente confundem, então leiam os exemplos para entender melhor

*/
/*
let calcularSeculo = (ano) =>
{
	if (ano>999 && ano<2021)
	{
		if (ano%100 > 0)
		{
		resto = ano%100
		seculo = ((ano/100) + 1) - (resto/100)

		} else if (ano%100 === 0)
		{
			seculo = (ano/100)
		}
	}


	//RESPOSTA ATRAVÉS DA DECLARAÇÃO SWITCH
	let romanos
	switch (seculo)
	{
		case 11:
		romanos = "XI"
		break;
		
		case 12:
		romanos = "XII"
		break;
		
		case 13:
		romanos = "XIII"
		break;
		
		case 14:
		romanos = "XIV"
		break;
		
		case 15:
		romanos = "XV"
		break;
		
		case 16:
		romanos = "XVI"
		break;
		
		case 17:
		romanos = "XVII"
		break;
		
		case 18:
		romanos = "XVIII"
		break;
		
		case 19:
		romanos = "XIX"
		break;
		
		case 20:
		romanos = "XX"
		break;

		case 21:
		romanos = "XXI"
		break;
	}

	return "O ano " + ano + " pertence ao século " + romanos

	//RESPOSTA ATRAVÉS DA DECLARAÇÃO IF
	/*
	if (seculo===11)
	{
		romanos = []
		romanos.push("XI")
	}
	else if (seculo===12)
	{
		romanos = []
		romanos.push("XII")
	}
	else if (seculo===13)
	{
		romanos = []
		romanos.push("XIII")
	}
	else if (seculo===14)
	{
		romanos = []
		romanos.push("XIV")
	}
	else if (seculo===15)
	{
		romanos = []
		romanos.push("XV")
	}
	else if (seculo===16)
	{
		romanos = []
		romanos.push("XVI")
	}
	else if (seculo===17)
	{
		romanos = []
		romanos.push("XVII")
	}
	else if (seculo===18)
	{
		romanos = []
		romanos.push("XVIII")
	}
	else if (seculo===19)
	{
		romanos = []
		romanos.push("XIX")
	}
	else if (seculo===20)
	{
		romanos = []
		romanos.push("XX")
	}

	return "O ano " + ano + " pertence ao século " + romanos
}
*/

}

let meuAno = calcularSeculo(1101)
console.log(meuAno)
*/









/*
EXERCÍCIO 6
Para os itens a seguir, considere o seguinte array para os seus testes:

    const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele
*/
/*
function arrayNum(quantidade) {
    return quantidade.length
}
let qtddElementos = arrayNum([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])
console.log(qtddElementos)
*/
/*
b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
*/
/*
let parOuImpar = (num) =>
{
	let resultado = []

	for(i=0; i<num.length; i++)
	{
		let resto = Number(num[i]%2)
		if (resto!==0)
		{
			impar = ["O número " + num[i] + " é ímpar!"]
			resultado.push(impar)

		} else
		{
			par = ["O número " + num[i] + " é par!"]
			resultado.push(par)
		}
	}
	return resultado

}

let meuNum = parOuImpar([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])
console.log(meuNum)
*/
/*
c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele
*/
/*
let qtddPar = (num) =>
{
	let resultado = []

	for(i=0; i<num.length; i++)
	{
		let resto = Number(num[i]%2)
		if (resto===0)
		{
			par = ["O número " + num[i] + " é par!"]
			resultado.push(par)
		}
	}
	return resultado.length

}

let numeros = qtddPar([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])
console.log(numeros)
*/

/*
d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par
	Resposta: Eu acredito que já fiz isso.
*/



