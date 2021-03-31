import React from 'react';
import {useDispatch} from 'react-redux';
import * as filterActions from '../actions/index';

const FooterTodo = () => {
    const dispatch = useDispatch();
    return(
        <div className="flex justify-between w-full">
            <button onClick={() => dispatch(filterActions.filterAll())} className="bg-green-500 font-bold px-2 py-4 rounded h-12 w-24 hover:bg-green-600 wrap text-sm">All</button>
            <button onClick={() => dispatch(filterActions.filterCompleted())} className="bg-green-500 font-bold px-2 py-4 rounded h-12 w-24 hover:bg-green-600 wrap text-sm">Completed</button>
            <button onClick={() => dispatch(filterActions.filterUncompleted())} className="bg-green-500 font-bold px-2 py-4 rounded h-12 w-24 hover:bg-green-600 wrap text-sm">Pending</button>
            <button onClick={() => dispatch(filterActions.clearAllTask())} className="bg-green-500 font-bold px-2 py-4 rounded h-12 w-24 hover:bg-green-600 wrap text-sm">Clear All</button>
        </div>
    )
}
export default React.memo(FooterTodo);