import {actionTypes, filterTypes} from '../actions/types';

let data = JSON.parse(localStorage.getItem('todoList'));
const initialState = data ? data : [];

const TodoReducer = (state = initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state)) ///deep copy object
    const saveDataLocalStorage = () => {
        localStorage.setItem('todoList', JSON.stringify(newState));
    }
    switch(action.type) {
        case actionTypes.ADD_NEW_TASK:
            const task = {
                name: action.name,
                completed: false,
                show: true
            }
            newState.push(task);
            break;
        case actionTypes.EDIT_TASK:
            newState[action.index].name = action.name;
            break;
        case actionTypes.DELETE_TASK:
            newState.splice(action.index, 1);
            break;
        case actionTypes.COMPLETED_TASK:
            newState[action.index].completed = !newState[action.index].completed;
            break;
        case actionTypes.CLEAR_ALL_TASK:
            newState = [];
            break;
        case filterTypes.FILTER_ALL:
            newState.map((item) => {item.show = true;return newState;});
            break;
        case filterTypes.FILTER_COMPLETED:
            newState.map((item) => {
                if(item.completed === true){
                    item.show = true;
                }else {
                    item.show = false;
                }
                return newState;
            })
            break;
        case filterTypes.FILTER_UNCOMPLETED:
            newState.map((item) => {
                if(item.completed === false) {
                    item.show = true;
                }else {
                    item.show = false;
                }
                return newState;
            })
            break;
        default: 
            break;
    }
    saveDataLocalStorage();
    return newState;
}

export default TodoReducer;