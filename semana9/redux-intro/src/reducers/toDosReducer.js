const initialState = {
    toDosList: [],

    filter: "todas"
}

export const toDosReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type){
        case 'ADD_TASK' :{
            const newToDo =           
            {
                id: Date.now(),
                text: action.payload.text,
                complete: action.payload.complete,
            }
            return {...state, toDosList: [newToDo, ...state.toDosList]};
        }
        case 'MARK_TASK':{
            const newToDosList = state.toDosList.map(toDo =>
                toDo.id === action.payload.id ? 
                {...toDo, complete: !toDo.complete} : toDo
            )
            return {...state, toDosList: newToDosList};
        }
        case 'DELETE_TASK':{
            const newToDosList = state.toDosList.filter(toDo =>
                toDo.id !== action.payload.id ? true : false
            )
            return {...state, toDosList: newToDosList};
        }
        case 'MARK_ALL_COMPLETE_TASKS':{
            const newToDosList = state.toDosList.map(toDo =>
                toDo.complete ? 
                toDo : {...toDo, complete: !toDo.complete} 
            )
            return {...state, toDosList: newToDosList};
        }
        case 'DELETE_ALL_COMPLETE':{
            const newToDosList = state.toDosList.filter(toDo =>
                toDo.complete!==true ? toDo : false
            )
            return {...state, toDosList: newToDosList};
        }
        case 'SET_FILTER': {
            return {...state, filter: action.payload.filter}
        }
        
        default:
            return state
    }
}

