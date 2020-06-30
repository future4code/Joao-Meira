import { Character } from "../src/interfaces";
import { validateCharacter, performAttack } from "../index";


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

describe ("fight tests", () => {

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
})