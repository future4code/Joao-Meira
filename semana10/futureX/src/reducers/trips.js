const initialState = {
    tripsList: [],

    tripDetails:{}
}

const trips = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type){
        case 'SET_TRIPS_LIST' : {
            return{
                ...state, tripsList: action.payload
            }
        }
        case 'SET_TRIP_DETAILS' : {
            return{
                tripDetails: action.payload
            }
        }
    }
    return state
}

export default trips