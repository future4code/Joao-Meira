//EXERCICIO 1
// a. Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
// RESPOSTA: Todas, uma vez que a interface dispõe todos os valores como público.

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number; 
}

// const client : Client = {
//     name: "Meira",
//     registrationNumber: 10,
//     consumedEnergy: 200,
//     calculateBill(){
//         return 200 * 0.53
//     }
// }

// console.log(client.name, client.registrationNumber, client.consumedEnergy, `R$ ${client.calculateBill().toFixed(2)}`)

//EXERCICIO 2
// a. *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*
//RESPOSTA: O TS indica ser impossível criar uma instância de uma classe abstrata

// b. *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*
//RESPOSTA: É necessário criar uma classe não abstreata que estenda a classe Place para, posteriormente, criar uma instância desta
//classe não-abstrata.

export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

//   const newPlace = new Place ("3000000")

//EXERCICIO 3
// 1. *O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)*
//RESPOSTA: criar filhas não abstratas e estender a classe abstrata.

// 2. *Por que a `Place` não é uma interface?*
//RESPOSTA: Porque existem informações que devem ser passadas com acesso restrito. Além disso, a classe abstrata é suficiente
// às necessidades da aplicação.

// 3. *Por que a classe `Place` é uma Classe Abstrata?*
//RESPOSTA: Porque não há razão para criar uma instância tão superficial como "lugar". O nível de abstração
//desta classe seria grande demais e, por isso, sem aplicações práticas para criar instâncias.

export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }
  }

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }
  }

// const residencia1 = new Residence (3, "11111111")
// const comercio1 = new Commerce (4, "22222222")
// const industria1 = new Industry (12, "33333333")

// console.log(residencia1.getCep())
// console.log(comercio1.getCep())
// console.log(industria1.getCep())


//EXERCICIO 4
// a. Que métodos e propriedades essa classe possui? Por quê?
//RESPOSTA: um método para pegar o CPF privado, um método para pegar o CEP protected da classe abstrata e os atributos name, cpf, cep, registrationNumber,
//residentsQuantity, consumedEnergy.

export class ResidentialClient extends Residence implements Client {

    constructor(
        public name : string,
        protected cpf : string,
        public cep : string,
        public registrationNumber : number,
        protected residentsQuantity : number,
        public consumedEnergy : number,
    ){
        super(residentsQuantity, cep)
    }


    public calculateBill( ) : number {
        return this.consumedEnergy * 0.75
    }
    
    public getCPF () : string {
        return this.cpf
    }
}

const client1 = new ResidentialClient ("Puri Puri Prisoner", "11122233344400", "10200000", 13, 12, 400)

// console.log(client1.getCep(), client1.getCPF(), client1.calculateBill(), client1.name, client1.consumedEnergy)


//EXERCICIO 5
//A. Ela possuí quase todos os mesmos atributos e métodos.
//B. As pequenas diferenças estão no atributo privado do CNPJ e no método para ter acesso ao mesmo;
//bem como na existência do atributo "floorsQuantity" da superClasse Commerce que difere da extensão "residentsQuantity" da
//superClasse Residence.


export class CommercialClient extends Commerce implements Client {

    constructor(
        public name : string,
        private cnpj : string,
        public cep : string,
        public registrationNumber : number,
        protected floorsQuantity : number,
        public consumedEnergy : number,
    ){
        super(floorsQuantity, cep)
    }


    public calculateBill( ) : number {
        return this.consumedEnergy * 0.53
    }

    public getCNPJ () : string {
        return this.cnpj
    }
}

const comercio1 = new CommercialClient ("Venda do Elrond", "101200/0", "10300000", 22, 100, 1000)

//EXERCÍCIO 6
// a. *De* q*ual classe a `IndustrialClient` deve ser filha? Por quê?*
//RESPOSTA: Deve ser filha da classe Industry, para poder aproveitar a construção da quantidade de máquinas.

// b. *Que interface a `IndustrialClient` implementa? Por quê?*
//RESPOSTA: a interface de cliente, pois necessita dos atributos traçados por tal interface

// c. *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?*
//RESPOSTA: porque os atributos específicos são os únicos que têm acesso restrito.

export class IndustrialClient extends Industry implements Client {

    constructor(
        public name : string,
        private cnpj : string,
        public cep : string,
        public registrationNumber : number,
        private industrialNumber : number,
        protected machinesQuantity : number,
        public consumedEnergy : number,
    ){
        super(machinesQuantity, cep)
    }


    public calculateBill( ) : number {
        return ( this.consumedEnergy * 0.45 + (this.machinesQuantity * 100) )
    }

    public getCNPJ () : string {
        return this.cnpj
    }

    public getIndustrialNumber () : number {
        return this.industrialNumber
    }
}


const industria1 = new IndustrialClient ( "Capsule", "10100101", "30100200", 101, 102, 12, 40000)
const industria2 = new IndustrialClient ( "Capsule", "10100101", "30100200", 101, 102, 12, 40000)

// console.log(
//     industria1.name,
//     industria1.getCNPJ(),
//     industria1.getIndustrialNumber(),
//     `conta de energia de R$ ${industria1.calculateBill().toFixed(2)}`
//     )


    //EXCERCICIO 7 && EXERCICIO 8
    

    export class ClientManager {

        private clients : Client[] = []


        getClientsQuantity(){
            return this.clients.length
        }

        registerClient( newClient : Client ) : void {
            const registrationNumberVerification = this.clients.find ( client => {
                return client.registrationNumber === newClient.registrationNumber
            })
            if(registrationNumberVerification){
                console.log("Registro negado. Este cliente já existe")
            }
            else this.clients.push( newClient )
        }

        calculateEnergyBill (registrationNumber : number) {
            return (
                this.clients.forEach( client => {
                    if(client.registrationNumber === registrationNumber){
                        console.log(
                            `Conta de energia de R$ ${client.calculateBill().toFixed(2)}`
                        )
                    }   
                })
            )
        }

        calculateTotalIncome () : void {
            let TotalIncome : number = 0
            for (let i = 0; i < this.clients.length; i++){
                TotalIncome += (this.clients[i].calculateBill())
            }
            return console.log(`A receita total deste mês será de R$${TotalIncome.toFixed(2)}`)
        }

        deleteClient ( registrationNumber : number) : void {
            let deleteIndex : number = undefined
            for (let i = 0; i < this.clients.length; i++){
                if(this.clients[i].registrationNumber === registrationNumber){
                    deleteIndex = i
                }
                if(deleteIndex){
                    console.log(`O usuário ${this.clients[deleteIndex].name} foi deletado`)
                    this.clients.splice(deleteIndex, 1)
                } else console.log('Cliente não encontrado')
            }
        }

        printClients () : void {
            for(let i = 0; i < this.clients.length; i++){
                console.log(
                    `
                    NOME DO CLIENTE: ${this.clients[i].name}
                    NÚMERO DE REGISTRO: ${this.clients[i].registrationNumber}
                    TOTAL DE ENERGIA GASTO: ${this.clients[i].consumedEnergy} kW/h 
                    VALOR A SER PAGO: R$${this.clients[i].calculateBill().toFixed(2)}
                    `
                )
            }
        }
    }

    const clientsList = new ClientManager()

    clientsList.registerClient(client1)
    clientsList.registerClient(industria1)
    clientsList.registerClient(comercio1)

    clientsList.calculateEnergyBill(101)
    clientsList.calculateTotalIncome()
    console.log("Clientes cadastrados: ", clientsList.getClientsQuantity())
    clientsList.deleteClient(13)
    console.log("Clientes cadastrados: ", clientsList.getClientsQuantity())

    clientsList.printClients()

    clientsList.registerClient(industria2)