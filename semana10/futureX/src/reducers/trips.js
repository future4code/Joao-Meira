const initialState = {
    tripsList: [],
}

const trips = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type){
        case 'SET_TRIPS_LIST' : {
            return{
                ...state, tripsList: action.payload
            }
        }
    }
    return state
}

export default trips