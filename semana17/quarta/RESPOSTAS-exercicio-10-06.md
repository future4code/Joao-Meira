### EXERCÍCIO 1

*a. Explique como é a resposta que temos quando usamos o `raw`.*
*RESPOSTA:*  a resposta vem como uma array de objetos RowDataPacket, contendo todas as informações do objeto SQL buscado no banco de dados.

*b. Faça uma função que busque um ator pelo nome;*
*RESPOSTA:*

`export const getActorByName = async (name: string): Promise<any> => {
    try{
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
      `)
      console.log( result[0][0] )
    } catch (error) {
        console.error(error)
    }
}`

*c. Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.*
*RESPOSTA:* 
`export const genderCount = async (gender: string): Promise<any> => {
    try{
        const result = await connection.raw(`
        SELECT COUNT(*), gender
        FROM Actor
        WHERE gender = "${gender}"
        GROUP BY gender;
      `)
      console.log( result[0][0] )
    } catch (error) {
        console.error(error)
    }
}`


### EXERCICIO 2

*a. Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão*
`
export const updateSalary = async (
    salary : number, 
    id : string
    ) : Promise<any> => {
    try{
        await connection.raw(`
        UPDATE Actor
        SET salary = ${salary}
        WHERE id = '${id}';
      `)
      console.log( `Salário atualizado para R$${salary.toFixed(2)}!` )
    } catch (error) {
        console.error(error)
    }
}
`

*b. Uma função que receba um id e delete um ator da tabela*

`export const deleteActor = async (
    id : string
    ) : Promise<any> => {
    try{
        await connection.raw(`
        DELETE FROM Actor
        WHERE id = '${id}';
      `)
      console.log( `Ator deletado!` )
    } catch (error) {
        console.error(error)
    }
}`

*c. Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`*

`export const avgGenderSalary = async (
    gender : string
    ) : Promise<any> => {
    try{
        const response = await connection.raw(`
        SELECT AVG(salary) 
        FROM Actor
        WHERE gender = '${gender}';
      `)
      console.log( response[0][0] )
    } catch (error) {
        console.error(error)
    }
}`


### EXERCÍCIO 3

*a. Por que o id está sendo lido assim: `req.params.id`?*
*RESPOSTA:* ele é lido dessa forma para acessar o parâmetro passado pelo id contido no endereço da aplicação. Pelo que compreendi, o request é uma classe da biblioteca express e .params acessa a informação repassada através do ":id".

*b. O que as últimas linhas do try (`res.status(200).send(actor)`) e do catch (`res.status(400).send({...}` ) fazem? Teste o código se precisar.*
*RESPOSTA:*

*c. Crie um endpoint agora com as seguintes especificações:
- Deve ser um GET (`/actor`)
- Receber o gênero como um *query param* (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero*
*RESPOSTA:*
