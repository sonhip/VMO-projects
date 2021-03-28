import { combineReducers } from 'redux';
import CounterReducer from  '../components/pages/counter/reducers/counter-reducer';
import TodoReducer from '../components/pages/todo-list/reducer/todo-reducer';

const rootReducer = combineReducers({
    CounterReducer,
    TodoReducer
})

export default rootReducer;