import * as types from '../actions/types';

const initialState = {
    loading: false,
    dataQuotes: [],
    error: null
};

const RandomQuotesReducer = (state = initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state)); //// deep copy object;
    switch(action.type) {
        case types.START_GET_API:
            newState.loading = action.loading
            break;
        case types.STOP_GET_API:
            newState.loading = action.loading
            break;
        case types.GET_API_SUCCESS:
            newState.dataQuotes = action.dataQuotes
            break;
        case types.GET_API_FAIL:
            newState.error = action.error
            break;
        default:
            break;
    }
    return newState;
}

export default RandomQuotesReducer;