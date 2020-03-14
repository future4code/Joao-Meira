//  INTERPRETAÇÃO DE CÓDIGO

/*
EXERCÍCIO 1

A função inicia criando uma variável que referencia o valor numérico informado pelo usuário em um prompt.
Essa função realiza a conversão de um valor em dólar para reais pela cotação informada no prompt.
O valor em dolar é informado através da constante meuDinheiro, que atribuiu valor 100 a valorEmDolar.
Ao fim é executado um console.log que imprime o valor no console do navegador.




EXERCÍCIO 2

A função investeDinheiro trata de investimento de dinheiro através dos argumentos tipoDeInvestimento e valor.
Uma sentença do tipo switch é criada para oferecer valores variados a cada uma das opções de investimentos,
tendo como resultado a atribuição de valor à constante valorAposInvestimento pela multiplicação do valor
investido sobre a expectativa de rendimento do investimento.
Caso o usuário escolha um tipo de investimento não existente nas opções tratadas pela sentença "switch", é exibido um
alerta de "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"
A função investeDinheiro retorna o valor da constante valorAposInvestimento.

Em sequência são determinadas duas constantes com atribuição de dois investimentos diferentes: (i) novoMontante - que escolhe a opção de 150 reais para investimento
em ações; (ii) segundoMontante - que escolhe a opção de Tesouro Direto para investir a quantia de 200 reais.

Ao fim é impresso no console do navagador o valor de novoMontente (que será: "165") e, abaixo, a mensagem "undefined" pela não atribuição de valor a segundoMontante, vez que
inexistente a opção de "Tesoudo Direto" na sentença "switch".




EXERCÍCIO 3
O código inicia com a criação de 3 constantes: numeros, array1 e array2.
Em seguida há a formulação de uma verificação "for of" para determinar os números pares da array "numeros" (que serão armazenados em "array1") e os numeros ímpares dessa mesma
constante (que serão armazenados na "array2").

Por fim o código imprime no console do navegador a mensagem "Quantidade total de números 14", "6" e "8", um abaixo do outro, consecutivamente.



EXERCÍCIO 4
O código inicia com a criação de uma constante rígida com identificação de "numeros", e duas variáveis do tipo "let: numero1 e numero2".

Como tarefa seguinte, o código cria uma verificação "for of" para delimitar os elementos da array "numeros" que são menores que a constante
"numero1" - por uma condição; e os elementos maiores que "numero2" - por outra condição. 
Como "numero1" tem valor "Infinity", a essa constante serão adicionados todos os valores da array numeros, vez que "Infinity" é o maior valor
possível.
"numero 2", por sua vez, terá uma array composta por quase todos os elementos de "numeros", com exceção do elemento -10.

Ao fim, serão impressos no console do navegador a array numero1 e numero2, uma abaixo da outra, consecutivamente.
*/





// EXERCÍCIO DE LÓGICA DE PROGRAMAÇÃO

/*
1 - Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.
*/
/*
array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(numero of array)
{
    if(numero%2 === 0)
    {
        console.log("O número " + numero + " é par")
    } else {
        console.log("O número " + numero + " é ímpar")
    }
}


for(i=0; i<array.length; i++)
{
    let impresso=array[i]
    console.log(impresso)
}


array.forEach((numero, index, array) =>
    console.log(numero)
)
*/




/*
2 - Para este exercício considere as seguintes variáveis:
    const booleano1 = true
    const booleano2 = false
    const booleano3 = !booleano2 (true)
    const booleano4 = !booleano3 (false)

Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:

a) `booleano1 && booleano2 && !booleano4`
False

b) `(booleano1 && booleano2) || !booleano3`
False

c)  `(booleano2 || booleano3) && (booleano4 || booleano1)`
True

d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)`
True

e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)`
True
*/








/*
3 - Você tem que escrever um código que, dado um número N, ele imprima (no console) os N primeiros números pares 
(por exemplo, se N for 3, você deve imprimir 0, 2 e 4; se N for 5, deve imprimir 0, 2, 4, 6 e 8).  
Um colega seu disse que já começou esta tarefa, mas não conseguiu terminar. Dê uma olhada no código dele:

const quantidadeDeNumerosPares
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
}

Este código funciona? Por quê? Caso não funcione, corrija a implementação dele.
    Resposta: não e o motivo principal é que não há atribuição de valores à const quantidadeDeNumerosPares.
    Pela inexistência do valor, não há como realizar a operação while, vez que i não possui valor com que
    se comparar. Contudo, para percorrer o array verificando os números, acredito que o melhor a se fazer
    seja o uso da sentença "for", atribuindo como quantidade de números a serem percorridos na array o dobro
    do valor N.
    A minha correção ficaria assim:
*/
/*
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
N = 3
percorrer = N * 2
for(i=0; i < percorrer ; i++)
{
    if (numeros[i] %2 === 0)
    console.log(numeros[i])
}
*/



/*
4 - Vocês lembram de trigonometria? (Oh, não, trigonometria). Relaxem. O exercício é simples, mas mexe com isso. 
Veja bem: quando nos ensinam triângulos (uma figura de três lados), nós aprendemos como classifica-los dependendo do tamanho de seus lados. 
Se um triângulo possuir os três lados iguais, ele é chamado de "Equilátero". 
Se possuir, dois (e somente 2) lados iguais, diz-se que ele é "Isósceles". 
Se os três lados tiverem medidas diferentes, ele é "Escaleno". 
Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: a, b, c  e retorne se ele é equilátero, isósceles ou escaleno.
*/
/*
let queTipoDeTriangulo = (ladoA, ladoB, ladoC) =>
{
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC)
    {
        console.log("O triángulo é equilátero")
    }
    else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC)
    {
        console.log("O triángulo é escaleno")
    } else
    {
        console.log("O triángulo é isóceles")
    }
}

queTipoDeTriangulo(2, 1, 3)
queTipoDeTriangulo(2, 2, 2)
queTipoDeTriangulo(3, 1, 3)
*/
/*
5 - Faça um programa que, dados dois números,
i. indique qual é o maior,

ii. determine se eles são divisíveis um pelo outro (use o operador `%`) e

iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre)
*/
/*
let compararDoisNumeros = (num1, num2) =>
{    
    if (num1>num2)
    {
        console.log(num1 + " é maior que " + num2)

    } else
    {
        console.log(num2 + " é maior que " + num1)
    }

    if(num1%num2 === 0)
    {
        console.log(num1 + " é divisível por " + num2)
    } else if (num2%num1 === 0)
    {
        console.log(num2 + " é divisível por " + num1)
    } else
    {
        console.log("Os números não são divisíveis entre si")
    }

    const diferença = num1-num2
    if (diferença >= 0)
    {
        console.log("A diferença entre os números " + num1 + " e " + num2 + " é " + diferença)
    }else
    {
        x = Number(diferença) * -1
        console.log("A diferença entre os números " + num1 + " e " + num2 + " é " + x)
    }
}

compararDoisNumeros(2, 4)
compararDoisNumeros(4, 2)
compararDoisNumeros(3, 4)
compararDoisNumeros(4, 3)
*/



// EXERCÍCIO DE FUNÇÕES

/*
1. Escreva uma função que receba um `array` de números e imprima na tela o segundo maior e o segundo menor número. 
Em seguida, invoque essa função.
    RESPOSTA: como não consegui usar os métodos ensinados de maneira eficiente, pesquisei na internet e conheci o método
    "".sort". Usando o método com o parâmetro de sequência decrescente  - function(a,b){return b-a} -, pude usar a posição
    do segundo e do penúltimo número para imprimir o segundo maior e o segundo menor.



*/
/*
let numeros = [1000, 20, 40, 2, 5, 100, 0, 77]

    numeros.sort(function(a,b)
    {
        return b-a;
    })
    console.log(numeros[1], numeros[numeros.length-2])
*/


/*
2. Escreva uma **função não nomeada** que faça um `alert("Hello Future4");`. Em seguida, invoque essa função.
*/
/*
const alerte = function(){alert("Hello Future4")}
alerte ()
*/










//EXERCICIO DE OBJETOS

/*
1. Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos.
    RESPOSTA: arrays são conjuntos que contêm elementos, que podem ser strings ou números. O objeto de JS é a classificação de
    elemento sintático que pode possuir vários valores, propriedades e métodos. 
    As arrays devem ser usadas para estocar dados simples, como números, letras e palavras; e permitem a manipulação e análise 
    destes dados através dos comandos de JS. Os objetos, por sua vez, podem funcionar como variáveis, permitindo o acesso
    e manipulação de seus valores através de métodos.
*/



/*
2. Crie uma função chamada criaRetangulo que recebe como parâmetros dois lados (lado1 e lado2) e retorna um objeto com 4 informações: 
largura (lado1), altura (lado2), perímetro (2 * (lado1 + lado2)) e área (lado1 * lado2).
*/
/*
function criaRetangulo (lado1, lado2)
{
    const informacaoRetangulo = [{largura: lado1, altura: lado2, perímetro: (2 * (lado1 + lado2)), área: (lado1 * lado2)}]
    console.log(informacaoRetangulo)
}

criaRetangulo (12,2)


/*
3. Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades:
título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes). 
Imprima na tela a seguinte string, baseada nos valores do objeto:
Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n. 
A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.
*/
/*
const filmeFavorito = [{título: "V de Vingança", ano: "2005", diretor: "James McTeigue", elenco: "Natalie Portman e Hugo Weaving"}]

const imprimirFilme = filmeFavorito.forEach((filme, index, array) =>
{
    console.log("Venha assistir ao filme " + filme.título + ", de " + filme.ano + ", dirigido por " + filme.diretor + " e estrelado por " + filme.elenco)
})
*/

/*
4. Crie um objeto que represente uma pessoa qualquer, com as propriedades de nome, idade, email e endereco. 
Crie uma função chamada anonimizarPessoa, que deverá retornar um novo objeto com as mesmas propriedades, 
mas com a string ANÔNIMO no lugar do nome. O objeto original deve ser mantido com o nome da pessoa.
*/
/*
const pessoa = {nome: "João" , idade: "32", email: "joao@gmail.com", endereco: "Rua Fuad Chequer"}
console.log(pessoa)

function anonimizarPessoa ()
{
    const anonimo =
    {
    ...pessoa,
    nome: "ANÔNIMO"  
    }
    console.log(anonimo)
}


anonimizarPessoa()
*/



// EXERCÍCIOS DE FUNÇÃO DE ARRAY
/*
1. Considere um array com o seguinte formato:
[
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
a) Faça uma função que retorne um novo array só com os adultos (pessoas com idade igual ou superior a 20)
b) Faça uma função que retorne um novo array só com as crianças/adolescentes (pessoas com idade inferior a 20)
*/
/*
const informacoesPessoais = 
[
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const filtroDeAdultos = informacoesPessoais.filter((objeto, index, array) =>
{
    if(objeto.idade>=20)
    {
        return objeto
    }
})

console.log (filtroDeAdultos)

const filtroDeJovens = informacoesPessoais.filter((objeto, index, array) =>
{
    if(objeto.idade<20)
    {
        return objeto
    }
})

console.log (filtroDeJovens)
*/






/*
2. Em todos os itens deste exercício, você terá que escrever uma função cuja entrada seja um array. 
Para testes, considere: const array = [1, 2, 3, 4, 5, 6].
a) Escreva uma função que retorne um array com as entradas multiplicadas por 2. 
Isto é [2, 4, 6, 8, 10, 12].
b) Escreva uma função que retorne um array com as entradas multiplicadas por 3 e como strings. 
Isto é: ["3", "6", "9", "15", "18"] 
c) Escreva uma função que retorne um array de strings dizendo: "${número} é par/impar". 
Isto é: ["1 é impar", "2 é par", "3 é impar", "4 é par", "5 é impar", "6 é par"] 
*/
/*
const array = [10, 32, 13, 64, 95, 67]
console.log(array)

function dobrar() {
    arrayDobrada = []
    for(numero of array){
        x = numero * 2
        arrayDobrada.push(x)
    }
    console.log(arrayDobrada)
    return arrayDobrada
}

dobrar()

function triplicar(){
    arrayTriplicada = []
    for(numero of array){
        y = numero * 3
        arrayTriplicada.push(y)
    }
    console.log(arrayTriplicada)
    return arrayTriplicada
}

triplicar()

function tornarString(){
    arrayString=[]
    for(numero of array){
        if(numero%2 === 0){
            z = `${numero} é par`
        } else {
            z = `${numero} é ímpar`
        }
        arrayString.push(z)
    }
    console.log(arrayString)
    return arrayString
}

tornarString()
*/




/*
3. Imagine que você trabalhe num parque de diversões, como desenvolvedor(a). 
As suas tarefas são sempre com o intuito de ajudar a automação de alguns processos internos do parque. 
Uma das atrações principais dele é a montanha russa do terror. As filas são muito grandes e todas as pessoas 
de várias idades insistem entrar no brinquedo, mesmo sabendo que não podem. Considere, então, essas pessoas:

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

A regra para entrar na montanha russa do terror é: 
ter, no mínimo, 1.5m de altura; ser mais velho do que 14 anos e mais novo do que 60 anos.
a) Escreva uma função que receba este array e devolva outro array somente com as pessoas que tem permissão de entrar no brinquedo
b) Escreva uma função que receba este array e devolva outro array somente com as pessoas que não podem entrar no brinquedo.
*/
/*
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const permitidoEntrar = pessoas.map((pessoa, index, array)=>{
    if(pessoa.idade >= 14 && pessoa.idade < 60 && pessoa.altura >= 1.5){
        return pessoa
    }
})
console.log(permitidoEntrar)

const proibidoEntrar = pessoas.map((pessoa, index, array)=>{
    if(pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.5){
        return pessoa
    }
})
console.log(proibidoEntrar)
*/






/*
4. Você foi contratado por um escritório médico para gerar e-mails automáticos para seus clientes, 
lembrando-os de sua consulta marcada; ou avisa-los que foi cancelada. Considere, então, essas consultas:

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

A sua tarefa é criar um array com os e-mails para cada um deles. Existem dois padrões de e-mail.
Para as consultas não canceladas é:
Olá, ${ Sr./Sra. } ${ nome da pessoa }. Estamos enviando esta mensagem para
${ lembrá-lo / lembrá-la } da sua consulta no dia ${ data da consulta }. Por favor, acuse
o recebimento deste e-mail.

Para as consultas canceladas é:
Olá, ${ Sr./Sra. } { nome da pessoa }. Infelizmente, sua consulta marcada
para o dia ${ data da consulta } foi cancelada. Se quiser, pode entrar em 
contato conosco para remarcá-la
*/

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

consultas.forEach((cliente, index, array)=>{
    if(cliente.genero === "masculino"){
        cliente.tratamento="Sr."
    } else {
        cliente.tratamento="Sra."
    }
})

consultas.forEach((cliente, index, array)=>{
    if(cliente.genero === "masculino"){
        cliente.enclise = "lembrá-lo"
    } else {
        cliente.enclise = "lembrá-la"
    }
})

let arrayCanceladas = []
let arrayConfirmadas = []

const addEmail = consultas.forEach((cliente, index, array)=>{
    if(cliente.cancelada === true){
        arrayCanceladas.push(`Olá, ${ cliente.tratamento } ${cliente.nome}. Infelizmente, sua consulta marcada
        para o dia ${cliente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
        contato conosco para remarcá-la`)
    } else{
        arrayConfirmadas.push(`Olá, ${ cliente.tratamento } ${ cliente.nome }. Estamos enviando esta mensagem para
        ${ cliente.enclise } da sua consulta no dia ${ cliente.dataDaConsulta }. Por favor, acuse
        o recebimento deste e-mail.`)
    }
})

function imprimirNoDiv(){
    for(email of arrayConfirmadas){
        document.getElementById("container").innerHTML += "<p>" + email + "</p>"
    }
    for(email of arrayCanceladas){
        document.getElementById("container").innerHTML += "<p>" + email + "</p>"
    }
}



