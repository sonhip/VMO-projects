import React from 'react';
import {useDispatch} from 'react-redux';
import * as filterActions from '../actions/index';

const FooterTodo = () => {
    const dispatch = useDispatch();
    return(
        <div className="bg-purple-100 w-full h-32 wrap grid grid-cols-2 gap-2 justify-items-center py-8 content-center border-black">
            <button onClick={() => dispatch(filterActions.filterAll())} className="bg-yellow-600 font-lighter w-28 rounded focus:outline-none h-10 hover:bg-yellow-700 wrap text-sm">All</button>
            <button onClick={() => dispatch(filterActions.filterCompleted())} className="bg-yellow-600 font-lighter w-28 rounded focus:outline-none h-10 hover:bg-yellow-700 wrap text-sm">Completed</button>
            <button onClick={() => dispatch(filterActions.filterUncompleted())} className="bg-yellow-600 font-lighter w-28 rounded focus:outline-none h-10 hover:bg-yellow-700 wrap text-sm">Pending</button>
            <button onClick={() => dispatch(filterActions.clearAllTask())} className="bg-yellow-600 font-lighter w-28 rounded focus:outline-none h-10 hover:bg-yellow-700 wrap text-sm">Clear All</button>
        </div>
    )
}
export default React.memo(FooterTodo);