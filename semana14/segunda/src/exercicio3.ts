export type carro = {
    marca: string,
    capacidadeCombustivel: number,
    ehFlex: boolean,
    combustivelGasto: (km: number) => number
  }
  
  export const fusca: carro = {
    marca: 'Volkswagen',
    capacidadeCombustivel: 50,
    ehFlex: false,
    combustivelGasto: (km) => { return 0.25 * km}
  };
  
  console.log(fusca.combustivelGasto(10));