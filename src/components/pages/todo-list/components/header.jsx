import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNewTask} from '../actions/index';

const HeaderTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        if(input === ''){
            alert('please add a task before you add!')
        }else {
            dispatch(addNewTask(input));
            setInput('');
        }
    }
    return(
        <div className="flex justify-around items-end w-full border py-4 px-2">
            <div>
                <label className="font-bold font-xl ml-2 mb-4" htmlFor="input">Task Name</label>
                <input className="placeholder-gray-500 border-2 font-xl px-2 py-2 w-full ml-2 focus:outline-none focus:border-blue-300" value={input} onChange={(e) => setInput(e.target.value)} placeholder="type something..." id="input"/>
            </div>
            <button onClick={handleClick} className="font-bold px-4 py-2 h-11 flex items-center hover:bg-green-600 bg-green-500 rounded ">Add</button>
        </div>
    )
}
export default React.memo(HeaderTodo);