import { Character } from "./src/interfaces";



export function validateCharacter (character : Character) : boolean {
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


export const performAttack = (
  attacker : Character,
  defender : Character,
  validator : (character : Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("O personagi tá errado");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};

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

console.log(performAttack(attacker, defender, validateCharacter as any));
