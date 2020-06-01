import { JSONFileManager } from "./fileManager";
import { UserAccount } from "./userAccount";
import * as fs from 'fs'
import moment from 'moment'

export class Bank {
    public accounts : UserAccount[];
    public fileManager : JSONFileManager;

    constructor( accounts : UserAccount[], fileManager : JSONFileManager ) {
        this.accounts = accounts,
        this.fileManager = fileManager
    }

    createAccount(    
        name : string, 
        birthDay : string,
        cpf : string, 
        ) : void {

        const cpfVerification = this.accounts.find( account => {
            return account.cpf === cpf
        })
        const ageVerification = moment().diff(birthDay, 'years')

        if (cpfVerification) {
            console.log("\x1b[31m", "Este CPF já possuí uma conta cadastrada.")
        } else {
            if(ageVerification < 18) {
                console.log("\x1b[31m", 'Contas só podem ser abertas por maiores de 18 anos.')
            } else if ( ageVerification >= 18 && cpf && birthDay ) {
            try{
                const newAccount : UserAccount = new UserAccount(name, cpf, birthDay)
                this.accounts.push(newAccount)
                this.fileManager.writeAccountToFile(this.accounts)

                return console.log("\x1b[32m", "Conta criada com sucesso!")
                } catch (error){
                console.error(error)
            }
        } else {
            console.log("\x1b[31m", "Está faltando alguma informação!")
        }}

    }

    getAllAccounts(): void {
        try{
            this.accounts.map( account => {
                console.log("\x1b[1m",`
                Titular da Conta: ${account.name}
                CPF: ${account.cpf}
                Data de Nascimento: ${account.birthDay}
                Saldo: R$${account.getBalance().toFixed(2)}
                ` +
                'Extrato da conta:\n', account.transactions, '\n');
            })
        } catch(error) {
            console.error(error)
        }
    }

    getAllAccountsByCpf() : void {

    }
 }

