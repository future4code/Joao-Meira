const initialState = {
    tasks: [],
}

const tasks = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TASK' :
            const newTasks = [...state.tasks,           
            {
                id: action.id,
                text: action.payload.text,
                completed: "incomplete",
            }]
            return [
                ...state.tasks, newTasks
            ] 
        case 'MARK_TASK':
            return state.tasks.map(task =>
                task.id === action.id ? {...task, completed: complete} : task
            )
        default:
            return state
    }
}

export default tasks

