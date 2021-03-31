import { combineReducers } from 'redux';
import CounterReducer from  '../components/pages/counter/reducers/counter-reducer';
import TodoReducer from '../components/pages/todo-list/reducer/todo-reducer';
import RandomQuotesReducer from '../components/pages/random-quotes/reducer/random-quotes-reducer';

const rootReducer = combineReducers({
    CounterReducer,
    TodoReducer,
    RandomQuotesReducer
})

export default rootReducer;