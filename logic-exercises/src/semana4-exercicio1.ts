// Dado um array ordenado `nums` e um valor alvo `target`,
// retorne o index do array no qual o valor se encontra
// se ele for encontrado. Se não, retorne o index no qual ele
// estaria se estivesse no array (lembrando que ele é ordenado).
// Assuma que o array não possui elementos duplicados.
// Alguns exemplos de entrada e saída:


export function findValue (nums : number[], target : number ) : number {
    const biggerThen = []
    for(let i=0; i < nums.length; i++){
        if(nums[i] === target){
            return i
        }
        if(nums[i] > target){
            biggerThen.push(i)
        }
    }
    if(target > nums[nums.length - 1]){
        return nums.length - 1
    }
    return biggerThen[0]
}