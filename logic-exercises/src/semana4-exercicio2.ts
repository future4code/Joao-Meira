// Dado um array ordenado `nums` e um valor alvo `target`,
// retorne o index do array no qual o valor se encontra se ele for encontrado.
// Se não, retorne o index no qual ele estaria se estivesse no array
// (lembrando que ele é ordenado).
// Assuma que o array não possui elementos duplicados.

export function zerosToTheBack(nums: number[]) {

    let zerosQuantity = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
        console.log("numero de voltas")
        for(let j=i+1; j < nums.length - (i + 2); i++){
            console.log("numero de voltas 2")
            nums[i] = nums[j]
        }
        nums[nums.length-(1 + zerosQuantity)] = 0
        zerosQuantity += 1
    }
}

    console.log(zerosQuantity)
    return nums

//   let numsWithBackZeros = [];
//   let zeroQuantity = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       numsWithBackZeros.push(nums[i]);
//     }
//     if (nums[i] === 0) {
//       zeroQuantity += 1;
//     }
//   }
//   while (zeroQuantity > 0) {
//     numsWithBackZeros.push(0);
//     zeroQuantity -= 1;
//   }
//   return numsWithBackZeros;
}

console.log(zerosToTheBack([ 1, 0, 1, 56, 34]));
