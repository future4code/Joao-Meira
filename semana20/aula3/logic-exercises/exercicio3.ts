//a. Faça uma função que receba duas strings e devolva se elas são iguais, considerando se os 
//caracteres estão em maiúsculo ou minúsculo. Ex.: deve retornar true para as entradas escola 
//e escola; mas retornar false para escola e Escola

export function compareStrings (string1 : string, string2 : string) {

	const comparing = string1.localeCompare(string2)
	if(comparing === 0){
		return true
	} else if(comparing === 1 || comparing === -1){
		return false
	} else {
        return "Ocorreu um erro."
    }
}

//b. Faça uma função que receba duas strings e devolva se elas são iguais, **ignorando** se 
//os caracteres estão em maiúsculo ou minúsculo. Ex.: deve retornar `true` para as entradas 
//`escola` e `Escola` ou `escola` e `EsCoLA`

export function compareStringsIgnoringCase (string1 : string, string2 : string) {
    const string1Case = string1.toLowerCase()
    const string2Case = string2.toLowerCase()
	const comparing = string1Case.localeCompare(string2Case)
	if(comparing === 0){
		return true
	} else if(comparing === 1 || comparing === -1){
		return false
	} else {
        return "Ocorreu um erro."
    }
}
