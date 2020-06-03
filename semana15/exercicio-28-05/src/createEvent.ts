import { Event } from './types'
import moment from 'moment'
import * as fs from 'fs';


const eventsList : Event[] = require("../events.json")


export function createEvent (
    eventName : string,
    eventDescription : string,
    eventDate : string,
) {

    const newEvent : Event = {
        name: eventName,
        description: eventDescription,
        date: eventDate,
    }

    if( eventName && eventDescription && eventDate && eventDate!== "Invalid date" ){
        try{
            eventsList.push(newEvent)
            fs.writeFileSync('events.json', JSON.stringify(eventsList), 'utf8')
            console.log("\x1b[32m", `O evento ${eventName} no dia ${eventDate} foi criado com sucesso!`)
        } catch(error){
            console.error(error)
    }} else if ( eventDate < moment().format("L")) {
        console.log("\x1b[31m", `Data inválida. Digite uma data igual ou posterior a ${moment().format("L")}`)
    } else  {
        console.log("\x1b[31m", "Confira os dados do evento. Alguma informação está faltando!")
    }
}