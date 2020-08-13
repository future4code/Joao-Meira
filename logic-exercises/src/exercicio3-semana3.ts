// Escreva uma função que recebe um array de números `nums` e um `target` e 
// retorna os **indíces** dos dois elementos que somam o valor do **target**.

// Você pode assumir que qualquer input possível sempre terá **exatamente** 
// 1 solução, e você não pode usar o mesmo elemento duas vezes.

export function findingTargetSum (nums : number[], target : number){

    for(let i = 0; i < nums.length; i++){
        for( let j = 0; j < nums.length; j++){
            if(j !== i){
                let sum = nums[i] + nums[j]
                if( sum === target){
                    return [i, j]
                }
            }
        }
    }
}
