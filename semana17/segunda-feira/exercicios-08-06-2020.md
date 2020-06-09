### EXERCÍCIO 1

*a. Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*
*RESOPOSTA:* Os comandos VARCHAR e DATE são tipagens de campos string e data respectivamente; PRIMARY KEY e NOT NULL são definições de valores, indicando se são únicos, se podem ser nulos ou se são necessários.


*b. O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*
*RESPOSTA:* o SHOW DATABASES retorna a quais são os bancos de dados usados (no meu caso o hamilton_joao_meira e information_schema). O primeiro é o nome do banco de dados usado, o segundo parece se referir aos metadados usados no schema em questão.
O comando SHOW TABLES retorna as tabelas criadas no banco de dados - que, no caso, só possuí a tabela Actor.

*c. O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando `SHOW Actor` e explique os resultados.*
*RESPOSTA:* O resultado é a especificação dos campos, tipos, valores (nulo ou não?), chave primária e extras da tabela.


### EXERCÍCIO 2

*a. Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*
*RESPOSTA:*
`INSERT INTO Actor
VALUES (
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);`

*b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*
*RESPOSTA:* O erro diz: entrada duplicada "001" para a chave primária
O erro acontece por culpa do número de ID que está sendo repetido, sendo que toda chave primária deve ser única. 

*c.*
*RESPOSTA:* a mensagem dia: "Contagem de coluna não bate com a contagem de valor na linha 1"
Acontece pela falta de inclusão de dois argumentos em Actor no comando INSERT INTO (3 argumentos ao invés de 5).

*d.*
*RESPOSTA:* a mensagem diz: "o campo 'nome' não tem um valor padrão"
O erro acontece pela não existência de valor atribuído a um argumento que não pode ser nulo (nome)


*e.*
*RESPOSTA:* a mensagem diz: "Valor da data incorreto: '1950' para coluna birth_date na linha 1"
O erro acontece pela forma do dado incluso no valor data não obedecer o formato da tipagem data.

*f.*
`INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006",
  "Murilo Benício",
  400000,
  "1949-04-18", 
  "male"
);`


### EXERCÍCIO 3

*a. Escreva uma query que retorne todas as informações das atrizes*
*RESOPOSTA:* 
`SELECT * FROM Actor WHERE gender = "female"`

*b. Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*
*RESOPOSTA:*
`SELECT salary FROM Actor WHERE name = "Tony Ramos"`

*c. Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*
*RESOPOSTA:* 
`SELECT gender FROM Actor WHERE gender = "invalid"`
O resultado retornou 0 linhas, já que não existem campos gender com valor 'invalid'

*d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*
*RESOPOSTA:* 
`SELECT id, name, salary FROM Actor WHERE salary <= 500000;`

*e. Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta*
*RESOPOSTA:* 
`SELECT id, nome from Actor WHERE id = "002"`
O erro diz que a coluna "nome" é desconhecida. Isso se deve ao campo "nome" preenchido no comando `SELECT. Para corrigir basta trocar para "name"`


### EXERCÍCIO 4

*a. Explique com as suas palavras a query acima*
*RESPOSTA:* a consulta realiza a busca de itens na tabela Actor que tenham os campos nome com valor em strings que começam com A ou J e salários maiores que R$300.000,00

*b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*
*RESPOSTA:* 
`SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;`

*c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.* 
*RESPOSTA:*
`SELECT * FROM Actor
WHERE (name LIKE "%g%" OR "G%") AND salary > 350000;`

*d. Escreva uma query com os atores que tenham a lerta "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*
*RESPOSTA:*
`SELECT * FROM Actor
WHERE (name LIKE "%g%" OR "%a%") AND salary >=350000 AND salary <= 900000;`


### EXERCÍCIO 5

Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)

*RESPOSTA:*
`INSERT INTO Movies
VALUES
(
'004',
'O Auto da Compadecida',
'João Grilo e Chicó são dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.',
'2000-09-15',
8.6
);`


### EXERCÍCIO 6

*a. Retorne o id, título e avaliação a partir de um id específico;*
*RESPOSTA:*
`SELECT id, title, rating FROM Movies WHERE id = '002'`

*b. Retorne um filme a partir de um nome específico;*
*RESPOSTA:*
`SELECT * FROM Movies WHERE title = 'O Auto da Compadecida'`

*c. Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`*
*RESPOSTA:*
`SELECT id, title, sinopsis FROM Movies WHERE rating <= 7`

### EXERCÍCIO 7
Escreva uma query que:

*a. Retorna um filme cujo título contenha a palavra `vida`*
*RESPOSTA:*
`SELECT * FROM Movies WHERE title LIKE "%vida%"`

*b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.*
*RESPOSTA:*
`SELECT * FROM Movies 
WHERE title LIKE "%auto%" OR sinopsis LIKE "%auto%"`

*c. Procure por todos os filmes que já tenham lançado*
*RESPOSTA:*
`SELECT * FROM Movies WHERE release_date < '2020-06-08'`

*d. Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.*
*RESPOSTA:*
`SELECT * FROM Movies 
WHERE 
(release_date < '2020-06-08') AND
(title LIKE "%auto%" OR
sinopsis LIKE "%auto%") AND
rating > 7`


