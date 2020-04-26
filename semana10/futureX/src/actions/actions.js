import axios from "axios"
import { routes } from "../containers/Router"
import { push } from "connected-react-router";
import moment from 'moment'


const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/futureX/joao-meira"

const token = localStorage.getItem('token')

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
            "auth": token,
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
    }

}

export const approveCandidate = (tripId, candidateId) => async (dispatch) => {
    
    const headers = {
        headers:{
            "auth": token,
        }
    }

    const body = {
        "approve": true,
    }

    try{
        await axios.put(`${baseUrl}/trips/${tripId}/candidates/${candidateId}/decide`,
        body,
        headers)
        alert("Candidato Aprovado!")
        dispatch(push(routes.tripDetailsPage))
        window.location.reload(true)
    } catch (error){
        console.error(error)
    }

}

export const getTripsList = () => async (dispatch) => {
    const response = await axios.get(`${baseUrl}/trips`)
    dispatch(setTripsList(response.data.trips))
}

export const getTripDetails = (tripId) => async (dispatch) => {
    const headers = {
        headers:{
            "auth": token,
        }
    }

    const response = await axios.get(`${baseUrl}/trip/${tripId}`, headers)
    dispatch(setTripDetails(response.data.trip))
}





export const setTripsList = (tripsList) => {
	return{
	type: 'SET_TRIPS_LIST',
	payload: tripsList,
	}

}

export const setTripDetails = (trip) => {
    return {
        type: 'SET_TRIP_DETAILS',
        payload: trip,
    }
}