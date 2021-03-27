import { combineReducers } from 'redux';
import CounterReducer from  '../components/pages/counter/reducers/counter-reducer';

const rootReducer = combineReducers({
    CounterReducer
})

export default rootReducer;