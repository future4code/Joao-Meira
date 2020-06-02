import { JSONFileManager } from "./fileManager";
import { UserAccount } from "./userAccount";
import moment, { Moment } from 'moment'

export class Bank {
    public accounts : UserAccount[];
    public fileManager : JSONFileManager;

    constructor( accounts : UserAccount[], fileManager : JSONFileManager ) {
        this.accounts = accounts,
        this.fileManager = fileManager
    }

    createAccount(    
        name : string, 
        cpf : string,
        birthDay : string, 
        ) : void {

        const cpfVerification = this.accounts.find( account => {
            return account.cpf === cpf
        })
        const ageVerification = moment().diff(birthDay, 'years')
        console.log(birthDay)

        if (cpfVerification) {
            console.log("\x1b[31m", "Este CPF já possuí uma conta cadastrada.")
        } else {
            if(ageVerification < 18) {
                console.log("\x1b[31m", 'Contas só podem ser abertas por maiores de 18 anos.')
            } else if ( ageVerification >= 18 && cpf && birthDay ) {
            try{
                const newAccount : UserAccount = new UserAccount(name, cpf, moment(birthDay).format('DD/MM/YYYY'))
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
                const thisAccount = new UserAccount(
                    account.name,
                    account.cpf,
                    account.birthDay
                    )
                console.log("\x1b[1m",`
                Titular da Conta: ${thisAccount.name}
                CPF: ${thisAccount.cpf}
                Data de Nascimento: ${thisAccount.birthDay}
                Saldo: R$${thisAccount.getBalance().toFixed(2)}
                ` +
                'Extrato da conta:\n', thisAccount.transactions, '\n');
            })
        } catch(error) {
            console.error(error)
        }
    }

    getAllAccountsByCpf() : void {

    }
 }

