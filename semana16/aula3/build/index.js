"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientManager = exports.IndustrialClient = exports.CommercialClient = exports.ResidentialClient = exports.Industry = exports.Commerce = exports.Residence = exports.Place = void 0;
class Place {
    constructor(cep) {
        this.cep = cep;
    }
    getCep() {
        return this.cep;
    }
}
exports.Place = Place;
class Residence extends Place {
    constructor(residentsQuantity, cep) {
        super(cep);
        this.residentsQuantity = residentsQuantity;
    }
}
exports.Residence = Residence;
class Commerce extends Place {
    constructor(floorsQuantity, cep) {
        super(cep);
        this.floorsQuantity = floorsQuantity;
    }
}
exports.Commerce = Commerce;
class Industry extends Place {
    constructor(machinesQuantity, cep) {
        super(cep);
        this.machinesQuantity = machinesQuantity;
    }
}
exports.Industry = Industry;
class ResidentialClient extends Residence {
    constructor(name, cpf, cep, registrationNumber, residentsQuantity, consumedEnergy) {
        super(residentsQuantity, cep);
        this.name = name;
        this.cpf = cpf;
        this.cep = cep;
        this.registrationNumber = registrationNumber;
        this.residentsQuantity = residentsQuantity;
        this.consumedEnergy = consumedEnergy;
    }
    calculateBill() {
        return this.consumedEnergy * 0.75;
    }
    getCPF() {
        return this.cpf;
    }
}
exports.ResidentialClient = ResidentialClient;
const client1 = new ResidentialClient("Puri Puri Prisoner", "11122233344400", "10200000", 13, 12, 400);
class CommercialClient extends Commerce {
    constructor(name, cnpj, cep, registrationNumber, floorsQuantity, consumedEnergy) {
        super(floorsQuantity, cep);
        this.name = name;
        this.cnpj = cnpj;
        this.cep = cep;
        this.registrationNumber = registrationNumber;
        this.floorsQuantity = floorsQuantity;
        this.consumedEnergy = consumedEnergy;
    }
    calculateBill() {
        return this.consumedEnergy * 0.53;
    }
    getCNPJ() {
        return this.cnpj;
    }
}
exports.CommercialClient = CommercialClient;
const comercio1 = new CommercialClient("Venda do Elrond", "101200/0", "10300000", 22, 100, 1000);
class IndustrialClient extends Industry {
    constructor(name, cnpj, cep, registrationNumber, industrialNumber, machinesQuantity, consumedEnergy) {
        super(machinesQuantity, cep);
        this.name = name;
        this.cnpj = cnpj;
        this.cep = cep;
        this.registrationNumber = registrationNumber;
        this.industrialNumber = industrialNumber;
        this.machinesQuantity = machinesQuantity;
        this.consumedEnergy = consumedEnergy;
    }
    calculateBill() {
        return (this.consumedEnergy * 0.45 + (this.machinesQuantity * 100));
    }
    getCNPJ() {
        return this.cnpj;
    }
    getIndustrialNumber() {
        return this.industrialNumber;
    }
}
exports.IndustrialClient = IndustrialClient;
const industria1 = new IndustrialClient("Capsule", "10100101", "30100200", 101, 102, 12, 40000);
const industria2 = new IndustrialClient("Capsule", "10100101", "30100200", 101, 102, 12, 40000);
class ClientManager {
    constructor() {
        this.clients = [];
    }
    getClientsQuantity() {
        return this.clients.length;
    }
    registerClient(newClient) {
        const registrationNumberVerification = this.clients.find(client => {
            return client.registrationNumber === newClient.registrationNumber;
        });
        if (registrationNumberVerification) {
            console.log("Registro negado. Este cliente já existe");
        }
        else
            this.clients.push(newClient);
    }
    calculateEnergyBill(registrationNumber) {
        return (this.clients.forEach(client => {
            if (client.registrationNumber === registrationNumber) {
                console.log(`Conta de energia de R$ ${client.calculateBill().toFixed(2)}`);
            }
        }));
    }
    calculateTotalIncome() {
        let TotalIncome = 0;
        for (let i = 0; i < this.clients.length; i++) {
            TotalIncome += (this.clients[i].calculateBill());
        }
        return console.log(`A receita total deste mês será de R$${TotalIncome.toFixed(2)}`);
    }
    deleteClient(registrationNumber) {
        let deleteIndex = undefined;
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].registrationNumber === registrationNumber) {
                deleteIndex = i;
            }
            if (deleteIndex) {
                console.log(`O usuário ${this.clients[deleteIndex].name} foi deletado`);
                this.clients.splice(deleteIndex, 1);
            }
            else
                console.log('Cliente não encontrado');
        }
    }
    printClients() {
        for (let i = 0; i < this.clients.length; i++) {
            console.log(`
                    NOME DO CLIENTE: ${this.clients[i].name}
                    NÚMERO DE REGISTRO: ${this.clients[i].registrationNumber}
                    TOTAL DE ENERGIA GASTO: ${this.clients[i].consumedEnergy} kW/h 
                    VALOR A SER PAGO: R$${this.clients[i].calculateBill().toFixed(2)}
                    `);
        }
    }
}
exports.ClientManager = ClientManager;
const clientsList = new ClientManager();
clientsList.registerClient(client1);
clientsList.registerClient(industria1);
clientsList.registerClient(comercio1);
clientsList.calculateEnergyBill(101);
clientsList.calculateTotalIncome();
console.log("Clientes cadastrados: ", clientsList.getClientsQuantity());
clientsList.deleteClient(13);
console.log("Clientes cadastrados: ", clientsList.getClientsQuantity());
clientsList.printClients();
clientsList.registerClient(industria2);
//# sourceMappingURL=index.js.map