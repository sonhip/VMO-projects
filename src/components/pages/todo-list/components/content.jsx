import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTask, editTask, completedTask} from '../actions/index';

const ContentTodo = () => {
    const state = useSelector(state => state.TodoReducer);
    const dispatch = useDispatch();
    console.log(state);
    return(
        <div className="flex flex-col w-full h-full overflow-y-scroll ">
            {state.map((item, index) => (
                item.show && (
                <div key={index} className="my-2 flex items-center mx-4">
                    <input onClick={() => dispatch(completedTask(index))} type="checkbox" className=" checked:bg-blue-600 mr-4 h-4 w-4 checked:border-transparent"></input>
                    {item.completed ? (
                        <input className="focus:outline-none text-xl flex-1 line-through" onChange={(e) => dispatch(editTask(index, e.target.value))} value={item.name}/>
                    ) : (
                        <input className="focus:outline-none text-xl flex-1" onChange={(e) => dispatch(editTask(index, e.target.value))} value={item.name}/>
                    )}
                    <div onClick={()  => dispatch(deleteTask())} className="text-red-500 font-medium text-xl cursor-pointer hover:text-red-700 border-2 rounded w-10 h-8 text-center text-bold">X</div>
                </div>
            )
            ))}
        </div>
    )
}
            <input/>
export default React.memo(ContentTodo);