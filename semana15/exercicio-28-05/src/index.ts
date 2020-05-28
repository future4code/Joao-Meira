import { createEvent } from './createEvent'
import { getEvents } from './getEvents'
import moment from 'moment'

const actionType : string = process.argv[2];


switch (actionType) {
    case "GET_ALL_EVENTS":
        getEvents();
        break;
    case "CREATE_EVENT":
        createEvent(process.argv[3], process.argv[4], moment(process.argv[5], "DD/MM/YYYY").format("L"));
        break;
    default:
        console.log('Ação não encontrada!')
}