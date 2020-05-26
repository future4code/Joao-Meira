export type bankTransaction = {
    value: number,
    date: any,
    description: string,
}

export type account = {
    userName: string,
    cpf: string,
    birthDay: string,
    balance: number,
    bankStatement: bankTransaction[],
}
