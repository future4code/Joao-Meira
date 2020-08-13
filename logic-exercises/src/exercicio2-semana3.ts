// Escreva uma função que recebe duas strings s e t e define se t é um anagrama de s. 
// Ou seja, se com as mesmas letras de s, é possível escrever t.

export function anagramCheck (s : string, t : string) {

    let arrayS = []
    let arrayT = []
    for( let i=0; i < s.length; i++){
        if(s[i] !== " "){
            arrayS.push(s[i])
        }
        if(t[i] !== " "){
            arrayT.push(t[i])
        }
    }

    if(arrayT.length !== arrayS.length){
        return "T não é anagrama de S"
    }

    const sortedS = arrayS.sort()
    const sortedT = arrayT.sort()

    for( let i=0; i < sortedS.length; i++){
        if(sortedS[i] !== sortedT[i]){
            return "T não é anagrama de S"
        }
    }
    return "T é anagrama de S"
}