const initialState = {
    commitments: [],
}

export const plannerReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_COMMITMENTS': {
            return {...state, commitments: action.payload.commitments}
        }     
        default:
            return state
    }
}

