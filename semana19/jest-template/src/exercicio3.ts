import { Casino, User, NATIONALITY, Result, ResultItem, LOCATION } from '../src/DTO/cassino'

export function verifyAge ( casino : Casino, users : User[] ) : Result {
    const allowedUsers : User[] = []
    const unallowedUsers : User[] = []
    
    for (let user of users){
        if( user.age >= 21 ){
            allowedUsers.push(user)
        } else if( user.age >= 18 ){
            switch( casino.location ){
                case LOCATION.BRAZIL:
                    allowedUsers.push( user )
                break;
                case LOCATION.USA:
                    unallowedUsers.push( user )
            } 
        } else {
            unallowedUsers.push( user )
        }
    }

    const brazilians = {
        allowed: 
            allowedUsers
            .filter( user => {
                user.nationality === NATIONALITY.BRAZILIAN
            }),
        unallowed: 
            unallowedUsers.filter( user => {
                user.nationality === NATIONALITY.BRAZILIAN
            })
    }

    const americans = {
        allowed: 
            allowedUsers
            .filter( user => {
                user.nationality === NATIONALITY.AMERICAN
            })
            .map( user => user.name),
        unallowed: 
            unallowedUsers.filter( user => {
                user.nationality === NATIONALITY.AMERICAN
            })
            .map( user => user.name),

    }
    console.log(NATIONALITY.BRAZILIAN)
    console.log(americans)
    return{
        brazilians: brazilians,
        americans: americans
    }
}


const casinoMock : Casino = {
    name: "Gambling with the Devil",
    location: LOCATION.BRAZIL
}
const userMock : User[] = [{
    name: "Dr. Stein",
    age: 22,
    nationality: NATIONALITY.BRAZILIAN
}]

console.log(verifyAge( casinoMock, userMock ))