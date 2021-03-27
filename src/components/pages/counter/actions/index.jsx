import * as types from './types';

export const increment = (val) => ({
    type: types.INCREMENT,
    val
})

export const decrement = (val) => ({
    type: types.DECREMENT,
    val
})

export const reset = () => ({
    type: types.RESET,
})