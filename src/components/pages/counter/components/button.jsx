import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../actions/index';

const ButtonComponent = (props) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.CounterReducer.count);
    const {btnStyle} = props;

    const handleClick  = () => {
        switch(props.name){
            case 'increment':
                dispatch(actions.increment(state));
                break;
            case 'decrement':
                dispatch(actions.decrement(state));
                break;
            case 'reset':
                dispatch(actions.reset());
                break;
            default:
                break;
        }
    }
    return (
        <button onClick={handleClick}  className={ `px-4 py-2 mx-4 rounded text-white ${btnStyle} `}>
            {props.children}
        </button>
    )
}
export default React.memo(ButtonComponent);
