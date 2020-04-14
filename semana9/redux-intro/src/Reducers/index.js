import { combineReducers } from 'redux'
import addingTask from './addTask'
import filter from './Filters'

export default combineReducers ({
    addingTask,
    filter,
})