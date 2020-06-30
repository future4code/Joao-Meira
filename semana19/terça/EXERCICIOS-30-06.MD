### EXERCICIO 1

*a. Crie uma interface para representar os personagens*
```
export interface Character {
    name : string,
    life : number,
    defense : number,
    strength : number
}
```

*b. Crie uma função `validateCharacter` que valide as informações de um personagem (devolvendo `true` se for válida ou `false` caso contrário). Nenhuma das propriedades pode ser vazias. Em relação a vida, defesa e força, elas só podem possuir valores iguais a 0 ou maiores*

```
import { Character } from "./src/interfaces";

function validateCharacter (character : Character) {
    if(
        !character.name || 
        character.life === undefined || 
        character.defense === undefined|| 
        character.strength === undefined
    ){
        return false
    } 
    if (character.life < 0 || 
        character.strength < 0 || 
        character.defense < 0
    ) {
        return false;
      }

    return true
}

```

### EXERCICIO 2
*a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio*

*b. Crie um teste que verifique o comportamento da função com um personagem com a vida vazia*

*c. Crie um teste que verifique o comportamento da função com um personagem com a força vazia*

*d. Crie um teste que verifique o comportamento da função com um personagem com a defesa vazia*

*e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo*

f*. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com o valor `0`*

g*. Crie um teste que verifique o comportamento da função com um personagem com as informações validas*


```
describe ( "character tests", () => {

    test("Should return false for empty name", () => {

        const mockCharacter : Character = {
            name: "",
            life: 1500,
            strength: 300,
            defense: 500,
        }
        const result = validateCharacter (mockCharacter)
    
        expect(result).toBe(false);
    });
    test("Should return false for empty life", () => {

        const mockCharacter : Character = {
            name: "Nhonho",
            life: undefined,
            strength: 300,
            defense: 500,
        }
        const result = validateCharacter (mockCharacter)
    
        expect(result).toBe(false);
    });
    test("Should return false for empty strength", () => {

        const mockCharacter : Character = {
            name: "Nhonho",
            life: 1000,
            strength: undefined,
            defense: 500,
        }
        const result = validateCharacter (mockCharacter)
    
        expect(result).toBe(false);
    });
    test("Should return false for empty defense", () => {

        const mockCharacter : Character = {
            name: "Nhonho",
            life: 1000,
            strength: 1000,
            defense: undefined,
        }
        const result = validateCharacter (mockCharacter)
    
        expect(result).toBe(false);
    });
    test("Should return false for empty defense", () => {

        const mockCharacter : Character = {
            name: "Nhonho",
            life: 1000,
            strength: 1000,
            defense: -2,
        }
        const result = validateCharacter (mockCharacter)
    
        expect(result).toBe(false);
    });
    test("Should return true for life = 0", () => {

        const mockCharacter : Character = {
            name: "Nhonho",
            life: 0,
            strength: 1000,
            defense: 100,
        }
        const result = validateCharacter (mockCharacter)
    
        expect(result).toBe(true);
    });
    test("Should return true for all fields correct", () => {

        const mockCharacter : Character = {
            name: "Nhonho",
            life: 100,
            strength: 1000,
            defense: 100,
        }
        const result = validateCharacter (mockCharacter)
    
        expect(result).toBe(true);
    });
})


```



### EXERCICIO 3
*a. Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação*

```
export const performAttack = (attacker : Character, defender : Character) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Personagem com problemas");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= (attacker.strength - defender.defense);
  }
};

```

*b. Implemente a função utilizando inversão de dependências*
```
export const performAttack = (
  attacker: Character,
  defender: Character,
  validateCharacter : (character : Character) => boolean
) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};
```
*c. Explique, com as suas palavras, as diferenças entre as duas implementações*
**Resposta:**
A primeira traz a função de validação dentro da execução da função, enquanto a segunda traz como argumento


### EXERCICIO 4
*a. De qual das duas funções (*`validateCharacter` ou `performAttack`)  deveremos criar um Mock nos próximos testes? Justifique.
**Resposta:**
Da segunda, já que sua implementação já foi testada em outro teste unitário. Assim, podemos manipular o resultado dela para testar os ambientes esperados para o teste da segunda função (que leva a primeira como argumento)

b. Crie um Mock dessa função que represente a saída de sucesso do seu comportamento
```
    const mockValidateCharacter = jest.fn(() => {
			return true
		});

```

c. Crie um Mock dessa função que representa a saída de erro/falha do seu comportamento
```
    const mockValidateCharacter = jest.fn(() => {
			return false
		});

```

### EXERCICIO 5

*a. Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida. Verifique o estado final das personagens. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, quantas vezes ela retornou.*

*b. Faça um teste com um dos personagens com alguma informação inválida. Verifique a mensagem de erro. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, o que ela retornou e quantas vezes ela retornou.*
```
    test("attacking 200 dmg", () => {
        const mockValidateCharacter = jest.fn(() => {
        return true;
        });

        const attacker: Character = {
        name: "Nhonho",
        life: 1500,
        defense: 200,
        strength: 600,
        };

        const defender: Character = {
        name: "Popis",
        life: 1500,
        defense: 400,
        strength: 800,
        };

        performAttack(attacker, defender, mockValidateCharacter as any);

        expect(defender.life).toEqual(1300);
        expect(mockValidateCharacter).toHaveBeenCalled();
        expect(mockValidateCharacter).toHaveBeenCalledTimes(2);
        expect(mockValidateCharacter).toHaveReturnedTimes(2);
    })
    test("attacking invalid character", () => {
        const mockValidateCharacter = jest.fn(() => {
        return false;
        });

        const attacker: Character = {
        name: "Nhonho",
        life: 1500,
        defense: 200,
        strength: 600,
        };

        const defender: Character = {
        name: "Popis",
        life: 1500,
        defense: 400,
        strength: 800,
        };

        try {
            performAttack(attacker, defender, mockValidateCharacter as any);
          } catch (err) {
            expect(err.message).toBe("O personagi tá errado");
            expect(mockValidateCharacter).toHaveBeenCalled();
            expect(mockValidateCharacter).toHaveBeenCalledTimes(1);
            expect(mockValidateCharacter).toHaveReturnedTimes(1);
          }
    })

```


### EXERCICIO 6

```
    test("attacking strengh inferior to defense", () => {
        const mockValidateCharacter = jest.fn(() => {
        return true;
        });

        const attacker: Character = {
        name: "Nhonho",
        life: 1500,
        defense: 200,
        strength: 600,
        };

        const defender: Character = {
        name: "Popis",
        life: 1500,
        defense: 800,
        strength: 800,
        };
        
        performAttack(attacker, defender, mockValidateCharacter as any);


            expect(defender.life).toEqual(1500);
            expect(mockValidateCharacter).toHaveBeenCalled();
            expect(mockValidateCharacter).toHaveBeenCalledTimes(2);
            expect(mockValidateCharacter).toHaveReturnedTimes(2);
    })
    test("attacking strengh inferior to defense", () => {
        const mockValidateCharacter = jest.fn(() => {
        return true;
        });

        const attacker: Character = {
        name: "Nhonho",
        life: 1500,
        defense: 200,
        strength: 600,
        };

        const defender: Character = {
        name: "Popis",
        life: 1500,
        defense: 800,
        strength: 800,
        };

        performAttack(attacker, defender, mockValidateCharacter as any);


            expect(defender.life).toEqual(1500);
            expect(mockValidateCharacter).toHaveBeenCalled();
            expect(mockValidateCharacter).toHaveBeenCalledTimes(2);
            expect(mockValidateCharacter).toHaveReturnedTimes(2);
    })
    test("attack bigger than life", () => {
        const mockValidateCharacter = jest.fn(() => {
        return true;
        });

        const attacker: Character = {
        name: "Nhonho",
        life: 1500,
        defense: 200,
        strength: 600,
        };

        const defender: Character = {
        name: "Popis",
        life: 200,
        defense: 200,
        strength: 800,
        };

        performAttack(attacker, defender, mockValidateCharacter as any);


            expect(defender.life).toEqual(-200);
            expect(mockValidateCharacter).toHaveBeenCalled();
            expect(mockValidateCharacter).toHaveBeenCalledTimes(2);
            expect(mockValidateCharacter).toHaveReturnedTimes(2);
    })
    test("defender invalid", () => {
        const mockValidateCharacter = jest.fn(() => {
        return true;
        });

        const attacker: Character = {
        name: "Nhonho",
        life: 1500,
        defense: 200,
        strength: 600,
        };

        const defender: Character = {
        name: "",
        life: 200,
        defense: 200,
        strength: 800,
        };

        try {
            performAttack(attacker, defender, mockValidateCharacter as any);
          } catch (err) {
            expect(err.message).toBe("O personagi tá errado");
            expect(mockValidateCharacter).toHaveBeenCalled();
            expect(mockValidateCharacter).toHaveBeenCalledTimes(1);
            expect(mockValidateCharacter).toHaveReturnedTimes(1);
          }
    })


```



