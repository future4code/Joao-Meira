### EXERCICIO 1
*a. Explique o que é uma chave estrangeira*
*RESPOSTA:* chave estrangeira é a classificação dada a um determinado campo importado de outra tabela. Esta palavra-chave é utilizada para possibilitar o uso de um campo importado de uma tabela filha, permitindo sua replicação mesmo que isso seja impossível na tabela original.

*b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*
**RESPOSTA:**
```
export const postCommentAndRating = async ( comment : string, rating : number, movieId : string ) : Promise<any> => {
    try{
        await connection.raw(`
        INSERT INTO Movies_Rating
            VALUES
            ( "${idGenerator()}", "${comment}", ${rating}, "${movieId}")
        `)
      console.log( "Comentário postado!" )
    } catch (error) {
        console.error(error)
    }
}
```
*c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*
**RESPOSTA:**
O erro anota que: "Cannot add or update a child row: a foreign key constraint fails".
Isso ocorre pela inexistência de uma linha que contenha o campo referenciado na tabela como uma foreign key.

d. *Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*
**RESPOSTA:**

    ALTER TABLE Movies DROP rating; 
 

*e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*
**RESPOSTA:**

```
12:27:33	DELETE FROM Movies WHERE id = '002'	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`hamilton_joao_meira`.`Movies_Rating`, CONSTRAINT `Movies_Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))	0,045 sec
```
Esse erro ocorre por existir uma outra tabela que depende de informação repassada pela linha que se quer deletar. Devido a isso, a linha só poderá ser apagada quando a referência à mesma em outra tabela também for.


### EXERCÍCIO 2

*a. Explique, com as suas palavras, essa tabela*
**RESPOSTA:**
É uma tabela que traz o id do elenco de cada um dos filmes listados, buscando o id do filme na lista de filmes e o id dos atores na lista de atores para correlacioná-los.

*b. Crie, ao menos, 6 relações nessa tabela* 
**RESPOSTA:**
```
export const addCast = async ( actorId : string,  movieId : string ) : Promise<any> => {
    try{
        await connection.raw(`
        INSERT INTO MovieCast
            VALUES
            ( "${actorId}", "${movieId}")
        `)
      console.log( `Atriz/Ator adicionado!` )
    } catch (error) {
        console.error(error)
    }
}
```

*c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*
**RESPOSTA:**
```
Error: ER_NO_REFERENCED_ROW_2: Cannot add or update a child row: a foreign key constraint fails
```
Esse erro indica que uma das referências feitas na tabela pai não foi encontrada na tabela filha e, por isso, não pode adicionar tal informação.

*d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*
**RESPOSTA:**
```
12:45:59	DELETE FROM Actor WHERE id = '002'	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`hamilton_joao_meira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0,046 sec
```
Esse erro é o mesmo do item d no exercício anterior. Por existir uma outra tabela que depende de informação repassada pela linha que se quer deletar. Devido a isso, a linha só poderá ser apagada quando a referência à mesma em outra tabela também for.


### EXERCÍCIO 3

*a. Explique, com suas palavras, a query acima. O que é o operador `ON`?*
**RESPOSTA:**
O operador ON traz o eixo de conexão entre as duas tabelas que serão fundidas em uma só. 
Para uma exemplificação melhor, podemos imaginar uma analogia onde JOIN é a junção de dois nucleotídeos diferentes (como nas ligações de DNA). A condição ON é a ligação de hidrogênio que permite a conexão entre dois nucleotídeos (tabelas). 

*b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*
**RESPOSTA:**
```
export const getRating = async () : Promise<any> => {
    try{
        const response = await connection.raw(`
        SELECT m.id as movie_id, r.rate as rating 
        FROM Movies m
        INNER JOIN Movies_Rating r ON m.id = r.movie_id;
      `)
      console.log( response[0] )
      return(response[0])
    } catch (error) {
        console.error(error)
    }
}
```


### EXERCÍCIO 4
*a. Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário*
**RESPOSTA:**
```
export const getRatings = async () : Promise<any> => {
    try{
        const response = await connection.raw(`
        SELECT m.id as movie_id, m.title as movie_title, r.rate as rating, r.comment as comment
        FROM Movies m
        LEFT JOIN Movies_Rating r ON m.id = r.movie_id;
      `)
      console.log( response[0] )
      return(response[0])
    } catch (error) {
        console.error(error)
    }
}
```

*b. Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator*
**RESPOSTA:**
```
export const getCast = async () : Promise<any> => {
    try{
        const response = await connection.raw(`
        SELECT m.id as movie_id, m.title as movie_title, c.actor_id
        FROM Movies m
        LEFT JOIN MovieCast c 
        ON m.id = c.movie_id;
      `)
      console.log( response[0] )
      return(response[0])
    } catch (error) {
        console.error(error)
    }
}
```

*c. Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)*
**RESPOSTA:**
```
export const getAverageRating = async () : Promise<any> => {
    try{
        const response = await connection.raw(`
        SELECT AVG (rate) as average_rating, movie_id
        FROM Movies_Rating 
        GROUP BY movie_id
      `)
      console.log( response[0] )
      return(response[0])
    } catch (error) {
        console.error(error)
    }
}
```


### EXERCICIO 5
*a. Explique, com suas palavras essa query. Por que há a necessidade de dois `JOIN`?*
**RESPOSTA:**
Esta query mostra, inicialmente, a integralidade de todos os itens da tabela Movie, fundindo a tabela Movie com a tabela MovieCast através do eixo de ligação do id dos itens da tabela movie com os movie_ids da tabela MovieCast.
Por ter sido dado o comando LEFT JOIN, serão trazidos todos filmes, a despeito de existir ou não correspondência com os atores. O guia do eixo de ligação é, portanto, o id da tabela Movie.
O segundo JOIN é um INNER com a função de ligar a tabela de atores à tabela MovieCast através da correlação entre o id de Actor com o actor_id na tabela MovieCast.


*b. Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque `alias` para facilitar o endentimento do retorno da query*
**RESPOSTA:**
```
export const getCastByTitle = async () : Promise<any> => {
    try{
        const response = await connection.raw(`
        SELECT m.id as movie_id, m.title as movie_title,mc.actor_id as actor_id, a.name as actor_name
        FROM Movies m
        LEFT JOIN MovieCast mc ON m.id = mc.movie_id
        LEFT JOIN Actor a ON a.id = mc.actor_id;
      `)
      console.log( response[0] )
      return(response[0])
    } catch (error) {
        console.error(error)
    }
}
```


*c. A query abaixo **deveria** ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.*
- Veja a query
    ```sql
    SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
    LEFT JOIN MovieCast mc ON m.id = mc.movie_id
    JOIN Actor a ON a.id = mc.actor_id;
    ```
**RESPOSTA:**
A query traz a correlação das tabelas Movie, MovieCast e Actor, vinculando a primeira com a segunda pelo id dos filmes e a segunda com a terceira pelo id da atriz/ator. 

*d. **Desafio:** Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)*
**RESPOSTA:**
```
export const getFullInfo = async () : Promise<any> => {
    try{
        const response = await connection.raw(`
        SELECT 
            m.id as movie_id, 
            m.title as movie_title,
            mc.actor_id as actor_id, 
            a.name as actor_name,
            mr.rate as rating,
            mr.comment as comment
        FROM Movies m
        LEFT JOIN MovieCast mc 
            ON m.id = mc.movie_id
        LEFT JOIN Actor a 
            ON a.id = mc.actor_id
        LEFT JOIN Movies_Rating mr 
            ON m.id = mr.movie_id
      ;`)
      console.log( response[0] )
      return(response[0])
    } catch (error) {
        console.error(error)
    }
}
```

### EXERCICIO 6
*a. Que tipo de relação é essa?*
Relação 1:N

*b. Explicite a query que você usou para criar a tabela*
```
CREATE TABLE Oscars (
	oscar_year INT NOT NULL,
    oscar_category VARCHAR(255) NOT NULL,
    movie_id VARCHAR(255) NOT NULL,
	PRIMARY KEY (oscar_year, oscar_category),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
```
Criei uma tabela que traga o ano e a categoria do Oscar, criando uma chave primária da combinação dos dois valores. Em adição, trago uma chave estrangeira da tabela filme para vincular a premiação de cada filme.

*c. Crie ao menos 2 óscar para cada um dos filmes* 
`
INSERT INTO Oscars
VALUE ( 2010, "Melhor Fotografia", '004');`
(o mesmo para os demais oscars de cada filme)

*d. Faça uma query que retorne todos os filmes e seus respectivos óscar*
```
        SELECT 
            m.title as movie_title,
            oscar_category,
            oscar_year
        FROM Movies m
        LEFT JOIN Oscars oscar 
            ON m.id = oscar.movie_id
      ;
```




































