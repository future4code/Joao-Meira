import axios from "axios"
import { routes } from "../containers/Router"
import { push } from "connected-react-router";
import moment from 'moment'


const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/futureX/joao-meira"



export const toLogin = (email, password) => async (dispatch) => {
    const body = {
        email: email,
        password: password,
    }

    try{
        const response = await axios.post( `${baseUrl}/login`, 
        body)
        window.localStorage.setItem("token", response.data.token)
        dispatch(push(routes.adminPage))
        window.location.reload(true)
    } catch (error){
        console.error(error)
    }

}

export const toSendApplication = (application) => async (dispatch) => {
    const body = {
        name: application.name,
        age: application.age,
        applicationText: application.applicationText,
        profession: application.profession,
        country: application.country,
    }

    try{
        await axios.post( `${baseUrl}/trips/${application.tripId}/apply`, 
        body)
        alert("Inscrição enviada!")
    } catch (error){
        console.error(error)
    }

}

export const toCreateTrip = (trip) => async (dispatch) => {
    const dateFormat = moment(trip.date).format('DD/MM/YYYY')
    
    const headers = {
        headers:{
            "auth": localStorage.getItem('token'),
        }
    }

    const body = {
        name: trip.name,
        planet: trip.planet,
        date: dateFormat,
        description: trip.description,
        durationInDays: Number(trip.durationInDays),
    }

    try{
        await axios.post( `${baseUrl}/trips`,
        body,
        headers)
        alert("Viagem criada!")
        dispatch(push(routes.tripsListPage))
    } catch (error){
        console.error(error)
        console.log(body)
        console.log(headers)
        console.log(body.date)
    }

}

export const getTripsList = () => async (dispatch) => {
    const response = await axios.get(`${baseUrl}/trips`)
    dispatch(setTripsList(response.data.trips))
}





export const setTripsList = (tripsList) => {
	console.log(tripsList)
	return{
	type: 'SET_TRIPS_LIST',
	payload: tripsList,
	}

}