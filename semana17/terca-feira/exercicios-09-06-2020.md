
### EXERCÍCIO 1

Leia os comandos abaixo e indique o que eles fazem. **Não** os rode nas tabelas desse projeto! Explique o que elas fariam **se fossem** rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder

*a.*
```sql
ALTER TABLE Actors DROP COLUMN salary;
```
*RESPOSTA:* Esse comando apaga a coluna "salary" da tabela Actors

*b.*
```sql
ALTER TABLE Actors CHANGE gender sex VARCHAR(6);
```
*RESPOSTA:* essa linha de comando muda o nome dado ao campo gender para "sex", limitando a string ao máximo de 6 bytes de comprimento.

*c.* 

```sql
ALTER TABLE Actors CHANGE gender gender VARCHAR(255);
```
*RESPOSTA:* essa linha de comando modifica o limite de comprimento da string que irá compor os valores na coluna gender, sem modificar o nome dado à coluna.

*d. Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres*
*RESPOSTA:*
`ALTER TABLE Actor CHANGE gender gender VARCHAR(100);`


### EXERCÍCIO 2

*a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`*
*RESPOSTA:*
`UPDATE Actor 
SET name = "Matheus Nachtergaele", birth_date = "1968-01-03"
WHERE id = '003'`

*b. Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PÃES`. Então, escreva outra query para voltar ao nome anterior.
*RESPOSTA:*
`UPDATE Actor
SET name = "Juliana Pães";`
`UPDATE Actor
SET name = UPPER(name)
WHERE name = "Juliana Pães";`
`ROLLBACK;`


*c. Escreva uma query que atualize todas as informações do ator com o id `005`*
*RESPOSTA:*
`UPDATE Actor
SET name = "Wagner Moura",
salary = 500000,
birth_date = "1976-06-27",
gender = "male"
WHERE id = "003";`


d*. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*
*RESPOSTA:*
Error Code: 1054. Unknown column 'ice_cream' in 'field list'
O erro se deve à inexistência da coluna buscada, que impede a modificação no campo.


### EXERCICIO 3

Para finalizar o CRUD, vamos ver o D: `DELETE`. Esse operador permite deletar toda uma linha de uma tabela, seria como apagar um elemento dela. 

Por exemplo, se quisermos apagar o ator com o nome `Tony Ramos`

```sql
DELETE FROM Actor WHERE name = "Tony Ramos"
```

*a. Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*
*RESPOSTA:*
`DELETE FROM Actor
WHERE name = "Fernanda Montenegro";`

*b. Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*
*RESPOSTA:*
`DELETE FROM Actor
WHERE gender = "male" AND salary < 1000000;`


### EXERCÍCIO 4

*a. Escreva uma query que pegue o maior salário de todos os atores e atrizes*
*RESPOSTA:*
`SELECT MAX(salary) FROM Actor;`

*b. Escreva uma query que pegue o menor salário das atrizes*
*RESPOSTA:*
`SELECT MIN(salary) FROM Actor WHERE gender = "female"`

*c. Escreva uma query que pegue a quantidade de atrizes*
*RESPOSTA:*
`SELECT COUNT(*) FROM Actor WHERE gender = "female";`

*d. Escreva uma query que pegue a soma de todos os salários*
*RESPOSTA:*
`SELECT SUM(salary) FROM Actor;`


### EXERCÍCIO 5
*a. Releia a última query. Teste-a. Explique o resultado com as suas palavras*
*RESPOSTA:* esta query percorre todos os elementos da tabela Actor, trazendo uma contagem de todos os itens, os agrupando de acordo com o valor deste campo em cada um dos itens. 

*b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*
*RESPOSTA:*
`SELECT id, name FROM Actor
ORDER BY name DESC;`

*c. Faça uma query que retorne todos os atores ordenados pelo salário*
*RESPOSTA:*
`SELECT * FROM Actor
ORDER BY salary DESC;`

*d. Faça uma query que retorne os atores com os três maiores salarios*
*RESPOSTA:*
`SELECT * FROM Actor
ORDER BY salary DESC;`

*e. Faça uma query que retorne a média de salário por gênero*
*RESPOSTA:*
`SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;`


### EXERCICIO 6
*a. Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.* 
*RESPOSTA:*
`ALTER TABLE Movies ADD playing_limit_date DATE;`

*b. Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*
*RESPOSTA:*
`ALTER TABLE Movies CHANGE rating rating FLOAT;`

*c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*
*RESPOSTA:*
`UPDATE Movies
SET playing_limit_date = "2020-03-31"
WHERE id = "003";`
`UPDATE Movies
SET playing_limit_date = "2020-02-31"
WHERE id = "002";`

*d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*
*RESPOSTA:*
`DELETE FROM Movies WHERE id = "001"`


### EXERCÍCIO 7
*a. Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?*
*RESPOSTA:*
3
`SELECT COUNT(*) FROM Movies WHERE rating > 7.5;`

*b. Qual a média das avaliações dos filmes?*
*RESPOSTA:*
'8.400000095367432'
`SELECT AVG(rating) FROM Movies;`

*c. Qual a quantidade de filmes em cartaz?*
*RESPOSTA:*
1
`SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();`

*d. Qual a quantidade de filmes que ainda irão lançar?*
*RESPOSTA:*
1
`SELECT COUNT(*) FROM Movies WHERE playing_limit_date < CURDATE();`

*e. Qual a maior nota dos filmes?*
*RESPOSTA:*
10
`SELECT MAX(rating) FROM Movies;`


*f. Qual a menor nota dos filmes?*
*RESPOSTA:*
7
`SELECT MIN(rating) FROM Movies;`


### EXERCÍCIO 8
Escreva **uma** query que:

*a. Retorne todos os filmes em ordem alfabética*
*b. Retorne os 5 primerios filmes em ordem descrente alfabética* 
*RESPOSTA DE A E B:*
`SELECT * FROM Movies ORDER BY title LIMIT 5;`


*c. Retorne os 3 filmes mais recentes em cartaz*
*RESPOSTA:*
`SELECT * FROM Movies 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC LIMIT 3;`

*d. Retorne os 3 filmes melhor avalidos*
*RESPOSTA:*
`SELECT * FROM Movies 
ORDER BY rating DESC 
LIMIT 3;`

