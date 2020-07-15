export function factorialCalculation(number: number) : any {
  const multipliers: number[] = [];
    if (number == 0 || number == 1) return 1;
    if (multipliers[number] > 0) return multipliers[number];
    return (multipliers[number] = factorialCalculation(number - 1) * number);
}


console.log(factorialCalculation(0))