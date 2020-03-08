import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Bem vindo ao jogo de Blackjack!")


let jogador1 = []
let valorCartas1 = []
let nPC = []
let valorCartas2 = []
let reveladanPC =[]
let comprar = []


function sumFunc(total, num)
{
   return total + num
}


// CARTAS INICIAIS USUÁRIO


if(confirm("Quer iniciar uma nova rodada?"))
{
   for (let i=0; i<2; i++)
   {
      const carta = comprarCarta()
      valorCartas1.push(carta.valor) 
      jogador1.push(carta.texto)
   }

   if(valorCartas1>21)
   {
      for(let i=0; i<2; i++)
      {
         jogador1.shift()
         valorCartas1.shift()
      }
      for(let i=0; i<2; i++)
      {
         const carta = comprarCarta()
         valorCartas1.push(carta.valor)
         jogador1.push(carta.texto)
      }
   }
} else 
   {
   console.log("O jogo acabou :(")
   }


// CARTAS INICIAIS NPC


if(valorCartas1!==0)
{
   for (let i=0; i<2; i++)
   {
      const carta = comprarCarta()
      valorCartas2.push(carta.valor) 
      nPC.push(carta.texto)
      reveladanPC.push(carta.texto)
   }
   reveladanPC.pop()

   if(valorCartas2>21)
   {
      for(let i=0; i<2; i++)
      {
         nPC.shift()
         valorCartas2.shift()
         reveladanPC.shift()
      }
      for(let i=0; i<2; i++)
      {
         const carta = comprarCarta()
         valorCartas2.push(carta.valor) 
         nPC.push(carta.texto)
         reveladanPC.push(carta.texto)
      }
      reveladanPC.pop() 
   } 
}



// COMPRA DE CARTAS USUÁRIO

if(confirm("Suas cartas são " + jogador1 + ". A carta revelada do computador é " + reveladanPC + "." + "\n" + "Deseja comprar uma carta?"))
{   
   const carta = comprarCarta()
   jogador1.push(carta.texto)
   valorCartas1.push(carta.valor)
   comprar.push(1)

   while(comprar.reduce(sumFunc) === 1 && valorCartas1.reduce(sumFunc)<=21)
   {  
      if(confirm("Suas cartas são " + jogador1 + ". A carta revelada do computador é " + reveladanPC + "." + "\n" + "Deseja comprar mais uma carta?"))
      {
      const carta = comprarCarta()
      jogador1.push(carta.texto)
      valorCartas1.push(carta.valor)
      } else
      {
         comprar.push(1)
      }
      console.log("Suas cartas são " + jogador1 + ".")
   }

}  

   
   // COMPRA DE CARTAS NPC

   while(valorCartas2.reduce(sumFunc)<=valorCartas1.reduce(sumFunc))
   {   
      const carta = comprarCarta()
      nPC.push(carta.texto)
      valorCartas2.push(carta.valor)
      console.log("As cartas do pc são " + nPC + ".")

   } 



// RESULTADO

if(valorCartas1.reduce(sumFunc)>21)
{
   alert ("Suas cartas são " + jogador1 + ". Sua pontuação ultrapassou os 21 pontos." + "\n" + "Você perdeu. =(")
}

if(valorCartas1.reduce(sumFunc) > valorCartas2.reduce(sumFunc) && valorCartas1.reduce(sumFunc) <= 21)
{
   alert ("Suas cartas são " + jogador1 + ". Sua pontuação é " + valorCartas1.reduce(sumFunc) + "." + "\n" + "As cartas do computador são " + nPC + ". A pontuação do computador é " + valorCartas2.reduce(sumFunc) + "." + "\n" + "Você ganhou, parça!!!")
}

else if(valorCartas2.reduce(sumFunc) > valorCartas1.reduce(sumFunc) && valorCartas2.reduce(sumFunc) <= 21)
{
   alert ("Suas cartas são " + jogador1 + ". Sua pontuação é " + valorCartas1.reduce(sumFunc) + "." + "\n" + "As cartas do computador são " + nPC + ". A pontuação do computador é " + valorCartas2.reduce(sumFunc) + "." + "\n" + "Você perdeu. =(")
}

else if(valorCartas2.reduce(sumFunc) > 21 && valorCartas1.reduce(sumFunc)<valorCartas2.reduce(sumFunc) && valorCartas1.reduce(sumFunc)<21)
{
   alert ("Suas cartas são " + jogador1 + ". Sua pontuação é " + valorCartas1.reduce(sumFunc) + "." + "\n" + "As cartas do computador são " + nPC + ". A pontuação do computador é " + valorCartas2.reduce(sumFunc) + "." + "\n" + "Você ganhou, parça!!!")
}

else if(valorCartas1.reduce(sumFunc)===valorCartas2.reduce(sumFunc))
{
   alert ("O jogo empatou!")
}



/*

RASCUNHO


if(valorCartas1 > valorCartas2 && valorCartas1 <= 21)
{
   alert ("Suas cartas são " + jogador1 + ". Sua pontuação é " + valorCartas1 + "." + "\n" + "As cartas do computador são " + nPC + ". A pontuação do computador é " + valorCartas2 + "." + "\n" + "Você ganhou, parça!!!")
}

else if(valorCartas2 > valorCartas1 && valorCartas2 <= 21)
{
   alert ("Suas cartas são " + jogador1 + ". Sua pontuação é " + valorCartas1 + "." + "\n" + "As cartas do computador são " + nPC + ". A pontuação do computador é " + valorCartas2 + "." + "\n" + "Você perdeu. =(")
}

else if(valorCartas2 > 21 && valorCartas1<valorCartas2)
{
   alert ("Suas cartas são " + jogador1 + ". Sua pontuação é " + valorCartas1 + "." + "\n" + "As cartas do computador são " + nPC + ". A pontuação do computador é " + valorCartas2 + "." + "\n" + "Você ganhou, parça!!!")
}

else if(valorCartas1===valorCartas2)
{
   alert ("O jogo empatou!")
}
*/

/*

if(confirm("Quer iniciar uma nova rodada?")){
   const carta = comprarCarta()
   valorCartas1.push(carta.valor) 
   duasCartas1.push(carta.texto)
   

   if(valorCartas1>1) {
      const carta = comprarCarta()
      valorCartas1.push(carta.valor)
      duasCartas1.push(carta.texto)
   } 
   
   if(duasCartas1==="A"+"♦️"+"A"+"♥️"||"A"+"♣️"+"A"+"♠️" ||"A"+"♣️"+"A"+"♥️" || "A"+"♣️"+"A"+"♦️" || "A"+"♠️"+"A"+"♦️" || "A"+"♠️"+"A"+"♦️"){
      duasCartas1.shift()
      duasCartas1.pop()
      valorCartas1.shift()
      valorCartas1.pop()

      const carta = comprarCarta()
      valorCartas1.push(carta.valor)
      duasCartas1.push(carta.texto)
   
      if(valorCartas1>1) {
         const carta = comprarCarta()
         valorCartas1.push(carta.valor)
         duasCartas1.push(carta.texto)
         a===1

      } 
} else {
      const carta = comprarCarta()
      valorCartas2.push(carta.valor)
      duasCartasRevelada.push(carta.texto)
      duasCartas2.push(carta.texto)
      a=valor

   }
   console.log(duasCartas1 + valorCartas1)

} else {
console.log("O jogo acabou :(")
}

if(a>0) {
   const carta = comprarCarta()
   valorCartas2.push(carta.valor)
   duasCartasRevelada.push(carta.texto)
   duasCartas2.push(carta.texto)

   if(valorCartas2>1){
      const carta = comprarCarta()
      valorCartas2.push(carta.valor)
      duasCartas2.push(carta.texto)
   } else{
      console.log("O jogo acabou :(")
   }

   console.log(duasCartas2 + valorCartas2)
  
if(duasCartas2==="A"+"♦️"+"A"+"♥️"||"A"+"♣️"+"A"+"♠️" ||"A"+"♣️"+"A"+"♥️" || "A"+"♣️"+"A"+"♦️" || "A"+"♠️"+"A"+"♦️" || "A"+"♠️"+"A"+"♦️"){
   duasCartas2.shift()
   duasCartas2.pop()
   valorCartas2.shift()
   valorCartas2.pop()
   duasCartasRevelada.shift()


   const carta = comprarCarta()
   valorCartas2.push(carta.valor)
   duasCartasRevelada.push(carta.texto)
   duasCartas2.push(carta.texto)

   if(valorCartas2>1) {
      const carta = comprarCarta()
      valorCartas2.push(carta.valor)
      duasCartas2.push(carta.texto)
   } else {
      console.log("O jogo acabou :(")
   }

} else { console.log("o jogo acabou!")}
console.log(duasCartas2 + valorCartas2)

}

*/


   /*
       if(confirm("Suas cartas são " + duasCartas1 + ". A carta revelada do computador é " + duasCartasRevelada + "." + "\n" + "Deseja comprar uma carta?")){   
            const carta = comprarCarta()
            duasCartas1.push(carta.texto)
            valorCartas1.push(carta.valor)

         if(duasCartas1.reduce < limite) {
            confirm("Suas cartas são " + duasCartas1 + ". A carta revelada do computador é " + duasCartasRevelada + "." + "\n" + "Deseja comprar mais uma carta?")
            const carta = comprarCarta()
            duasCartas1.push(carta.texto)
            valorCartas1.push(carta.valor)
         }

      } else {
         while(duasCartas2<21 && duasCartas2<duasCartas1){
            const carta = comprarCarta()
            duasCartas2.push(carta.texto)
            valorCartas2.push(carta.valor)

      }
   }

   function soma(total){
      return total
   }

      console.log("A pontuação do jogador é" + valorCartas1.reduce(soma) + "\n" + "A pontuação do PC é " + valorCartas2.reduce(soma))
     
   

*/

/*
         if(duasCartas1.reduce === 21){
            const carta = comprarCarta()
            duasCartas2.push(carta.texto)
            if(duasCartas2<duasCartas1){
            const carta = comprarCarta()
            duasCartas2.push(carta.texto)
         }

         if(duasCartas1>21 && resultado > 0){
            resultado 
         }

         let resultado = duasCartas1.reduce() - duasCartas2.reduce()

*/