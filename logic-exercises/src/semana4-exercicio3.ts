// `1` é lido como `um 1` ou `11`. `11` é lido como `dois 1` ou `21`. 
// `21` é lido como `um 2 e um 1` ou `1211`. `1211` é lido como `um 1 
// e um 2 e dois 1` ou `111221`. E assim por diante…Dado um inteiro `n` 
// , gere o “enésimo” termo da sequência “conte e diga”. Você pode fazer 
// isso recursivamente. 

// Repare que você sempre deve gerar o resultado do número atual 
// **com base no anterior**. 

// Nota: Cada termo da sequência deve ser uma string, não números.



function countAndTell(count : number){

        let currentSequence : string = "1"
        let nextSequence : any = 

                for(let i = 0; i < count; i++){
                    nextSequence = createNextSequence(currentSequence)
                }

}

function createNextSequence ( currentSequence : string ) : string{

    const newSequence : string[] = []
    const numberCount : number = 0

    for( let i = 0; i < currentSequence.length; i++){
        newSequence.unshift(currentSequence[i])
        if(newSequence.length > 1 && currentSequence[i] === currentSequence[i-1]){
            
        }
        newSequence.unshift()
    }
}