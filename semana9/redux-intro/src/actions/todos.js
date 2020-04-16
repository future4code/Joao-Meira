export const addTask = (text) => {
    return{
        type: 'ADD_TASK',
        payload: {
            text: text,
            complete: false,
        },
    }
}

export const deleteTask = (id) => {
    return{
        type: 'DELETE_TASK',
        payload: {
            id: id,
        }
    }
}


export const markTask = (id) => {
    return{
        type: 'MARK_TASK',
        payload: {
            id: id,
        }
    }
}


export const markAllCompleteTasks = () => {
    return {
        type: 'MARK_ALL_COMPLETE_TASKS',
        payload: {},
    }
}

export const deleteAllComplete = () => {
    return {
        type: 'DELETE_ALL_COMPLETE',
        payload: {},
    }
}

export const setFilter = (filter) => {
    return{
        type: 'SET_FILTER',
        payload:{
            filter: filter,
        }
    }
}


export const filters = {
SHOW_ALL: 'SHOW_ALL',
SHOW_COMPLETED: 'SHOW_COMPLETED',
SHOW_INCOMPLETE: 'SHOW_INCOMPLETE'
}

