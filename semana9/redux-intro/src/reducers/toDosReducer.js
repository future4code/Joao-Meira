const initialState = {
    toDosList: [
        {
            id: Date.now(),
            text: "tarefa doidera",
            complete: "incomplete",
        },
        {
            id: Date.now(),
            text: "tarefa maneira",
            complete: "incomplete",
        },
        {
            id: Date.now(),
            text: "tarefa dois toque de bola",
            complete: "incomplete",
        },
        {
            id: Date.now(),
            text: "tarefa na missão",
            complete: "incomplete",
        }
    ],
}

export const toDosReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type){
        case 'ADD_TASK' :
            const newToDo = [...state.toDosList,           
            {
                id: action.payload.id,
                text: action.payload.text,
                completed: "incomplete",
            }]
            return {...state, toDosList: newToDo}
            
        case 'MARK_TASK':
            return state.toDosList.map(toDo =>
                toDo.id === action.id ? 
                {completed: "complete"} : 
                    toDo
            )
        default:
            return state
    }
}

