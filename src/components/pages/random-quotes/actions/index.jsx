import * as types from './types';

export const getApiUser = () => ({
    type: types.GET_API_USER
})

export const startGetApi = (loading) => ({
    type: types.START_GET_API,
    loading
}) 
export const stopGetApi = (loading) => ({
    type: types.STOP_GET_API,
    loading
})
export const getApiSuccess = (dataQuotes) => ({
    type: types.GET_API_SUCCESS,
    dataQuotes
})
export const getApiFail = (error) => ({
    type: types.GET_API_FAIL,
    error
})