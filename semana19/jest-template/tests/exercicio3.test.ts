import { verifyAge } from '../src/exercicio3'
import { Casino, LOCATION, NATIONALITY, User, Result } from '../src/DTO/cassino'

describe ('testing exercicio3', () => {
    test('allowed brazilian user', () => {
        
        const casinoMock : Casino = {
            name: "Gambling with the Devil",
            location: LOCATION.BRAZIL
        }
        const userMock : User[] = [{
            name: "Dr. Stein",
            age: 22,
            nationality: NATIONALITY.BRAZILIAN
        }]

        const functionMock : Result = verifyAge( casinoMock, userMock )

        expect(functionMock.brazilians).toBeTruthy()
        expect(functionMock.brazilians.allowed).toHaveLength(1)
    })
    test('under age users in USA', () => {
        
        const casinoMock : Casino = {
            name: "Can I Play with Madness?",
            location: LOCATION.USA
        }
        const userMock : User[] = [
            {
            name: "O Vidente",
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
            },
            {
            name: "O Marinheiro Ancião",
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
            },
            {
            name: "The Clayrvoiant",
            age: 19,
            nationality: NATIONALITY.AMERICAN
            },
            {
            name: "Ancient Mariner",
            age: 19,
            nationality: NATIONALITY.AMERICAN
            }
        ]

        const functionMock : Result = verifyAge( casinoMock, userMock )
        console.log(functionMock.brazilians.unallowed)
        expect(functionMock.brazilians).toBeTruthy()
        expect(functionMock.brazilians.unallowed).toHaveLength(2)
        expect(functionMock.americans).toBeTruthy()
        expect(functionMock.americans.unallowed).toHaveLength(2)
    })
})