import axios from 'axios'


//                   API ACTIONS

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-meira/clear')
}

export const getProfileToSwipe = () => async (dispatch, getState) =>{
	const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-meira/person`)
	dispatch(setUnknownProfilesList(response.data.profile))
}

export const chooseProfile = (id, userChoice) => async (dispatch) => {
	const body = 
	{
		id: id,
		choice: userChoice
	}
	await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-meira/choose-person`,
		body)
	
	dispatch(getProfileToSwipe())
}

export const getMatches = () => async (dispatch) => {
	const response = await axios.get (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-meira/matches`)
	dispatch(setMatchesList(response.data.matches))
	console.log(response.data)
}




//                      STORE ACTIONS

export const setUnknownProfilesList = (unknownProfilesList) => {
	console.log(unknownProfilesList)
	return{
	type: 'SET_UNKNOWN_PROFILES_LIST',
	payload: unknownProfilesList,
	}

}

export const setMatchesList = (matchesList) => {
	console.log(matchesList)
	return{
	type: 'SET_MATCHES_LIST',
	payload: matchesList,
	}

}