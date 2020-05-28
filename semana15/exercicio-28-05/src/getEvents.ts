import {Event} from './types'

const eventsList : Event[] = require("../events.json")

export const getEvents = () => {
    try{
        eventsList.map( event => {
            console.log("\x1b[1m", `
            Atividade: ${event.name}
            Descrição: ${event.description}
            Data: ${event.date}
            `)
        })
    } catch(error){
        console.log(error)
    }
}