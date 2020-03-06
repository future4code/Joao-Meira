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


let duasCartas1 = []
let valorCartas1 = []
let duasCartas2 = []
let valorCartas2 = []
let duasCartasRevelada = []
let a
//let limite = 21



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