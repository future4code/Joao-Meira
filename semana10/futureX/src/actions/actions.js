import axios from "axios"
import { routes } from "../containers/Router"
import { push } from "connected-react-router";


const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/futureX/joao-meira"



export const toLogin = (email, password) => async (dispatch) => {
    const body = {
        email: email,
        password: password,
    }

    try{
        const response = await axios.post( `${baseUrl}/login`, body)
        console.log(response.data.token)
        window.localStorage.setItem("token", response.data.token)
        dispatch(push(routes.adminPage))
    } catch (error){
        console.error(error)
    }

}

export const getTripsList = () => async (dispatch) => {
    const response = await axios.get(`${baseUrl}/trips`)
    dispatch(setTripsList(response.data.trips))
    console.log(response.data)
}

// export const applyToTrip = () => async (dispatch) => {
//     const response = await axios.post (`${baseUrl}/trips/${id}/apply`)
// }





export const setTripsList = (tripsList) => {
	console.log(tripsList)
	return{
	type: 'SET_TRIPS_LIST',
	payload: tripsList,
	}

}