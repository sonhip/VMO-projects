import * as types from '../actions/types';

//get data counter
var counterData = JSON.parse(localStorage.getItem("counter"));

const initialState = counterData ? counterData : ({count: 0});


export default function CounterReducer(state = initialState, action) {
    const newState = JSON.parse(JSON.stringify(state)) ///deep copy object
    //function save data to localStorage
    const saveLocalStorage = () => {
        localStorage.setItem("counter", JSON.stringify(newState));
      };
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
    saveLocalStorage();
    return newState;
}
