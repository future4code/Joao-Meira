
export const addTask = (text) => {
    return{
        type: 'ADD_TASK',
        payload: {
            id: Date.now(),
            text: text,
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


export const markTask = (id, text) => {
    return{
        type: 'MARK_TASK',
        payload: {
            id: id,
            text: text,
        }
    }
}


export const markAllCompleteTask = () => {
    return {
        type: 'MARK_ALL_COMPLETE_TASK',
        payload: {
        },
    }
}


export const filters = {
SHOW_ALL: 'SHOW_ALL',
SHOW_COMPLETED: 'SHOW_COMPLETED',
SHOW_INCOMPLETE: 'SHOW_INCOMPLETE'
}


// export const filterIncompleteTask = (id, text, incomplete) => {
//     return{
//         type: 'FILTER_INCOMPLETE_TASK',
//         payload: {
//             id: id,
//             text: text,
//             complete: incomplete,
//         }
//     }
// }


// export const filterCompleteTask = (complete) => {
//     return {
//         type: 'FILTER_COMPLETE_TASK',
//         payload: {
//             id: id,
//             text: text,
//             complete: complete,
//         }
//     }
// }


export const deleteAllCompleteTask = () => {
    return {
        type: 'DELETE_ALL_TASK',
        payload: {
        }
    }
}