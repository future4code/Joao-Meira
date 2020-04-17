const initialState = {
  unknownProfilesList: undefined,

  matchesList: [],
}


const profiles = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type){

    case 'SET_UNKNOWN_PROFILES_LIST' : {
      return{
        ...state, unknownProfilesList: action.payload
      }
    }
    case 'SET_MATCHES_LIST' : {
      return {
        ...state, matchesList: action.payload
      }
    }

  }
  return state
}

export default profiles
