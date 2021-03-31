import {filterTypes, actionTypes} from './types';

export const addNewTask = (name) => ({
    type: actionTypes.ADD_NEW_TASK,
    name
})

export const editTask = (index, name) => ({
    type: actionTypes.EDIT_TASK,
    index,
    name
})

export const deleteTask = (index) => ({
    type: actionTypes.DELETE_TASK,
    index
})

export const completedTask = (index) => ({
    type: actionTypes.COMPLETED_TASK,
    index
})

export const clearAllTask = () => ({
    type: actionTypes.CLEAR_ALL_TASK
})

export const filterAll = () => ({
    type: filterTypes.FILTER_ALL
})

export const filterCompleted = () => ({
    type: filterTypes.FILTER_COMPLETED
})

export const filterUncompleted = () => ({
    type: filterTypes.FILTER_UNCOMPLETED
})