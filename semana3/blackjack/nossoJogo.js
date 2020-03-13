import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/*
*
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

   let jogador
   let duasCartas1 = []
   let a
   let b
   let nPC
   let duasCartas2 = []
   let c
   let d
   

 if(confirm("Quer iniciar uma nova rodada?")){
      const carta = comprarCarta()
      a = carta.valor
      duasCartas1.push(carta.texto)
      if(a>1) {
         const carta = comprarCarta()
         b = carta.valor
         duasCartas1.push(carta.texto)
      }
      
      console.log("Usuário - cartas " + duasCartas1 + " - pontuação " + Number(a + b)) 
      jogador = Number(a + b)

} else {
   console.log("O jogo acabou :(")
}
     

if(jogador>1){
         const carta = comprarCarta()
         c = carta.valor
         duasCartas2.push(carta.texto)
         if(c>1) {
            const carta = comprarCarta()
            d = carta.valor
            duasCartas2.push(carta.texto)
         }
         console.log("Computador - cartas " + duasCartas2 + " - pontuação " + Number(c + d)) 
         nPC = Number(c + d)
      }

if(jogador > nPC){
            console.log("O Usuário ganhou!")
            } else if(nPC > jogador){
            console.log("O Computador ganhou!")
                } else if (jogador = nPC && jogador>1) {
            console.log("Empate")
                   }



