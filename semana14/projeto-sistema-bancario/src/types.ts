export type bankTransaction = {
    value: number,
    date: string,
    description: string,
}

export type account = {
    userName: string,
    cpf: string,
    birthDay: string,
    balance: number,
    bankStatement: bankTransaction[],
}
