import * as types from '../actions/types';

const initialState = {
    count: 0
}

export default function CounterReducer(state = initialState, action) {
    let newState = JSON.parse(JSON.stringify(state)) ///deep copy object
    switch(action.type) {
        case types.INCREMENT:
            newState.count =  action.val +1;
            break; 
        case types.DECREMENT:
            newState.count = action.val -1;
            break;
        case types.RESET:
            newState.count = 0;
            break
        default: 
            break;
    }
    return newState;
}
