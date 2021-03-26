import React from 'react'
import {
  Link
} from "react-router-dom";
export default function Navbar() {
    return (
        <div className='flex justify-center'>
            <Link className='font-bold text-indigo-300 uppercase mx-8 my-2' to="/">Counter</Link>
            <Link className='font-bold text-indigo-300 uppercase mx-8 my-2' to="/random-quotes">Randomquotes</Link>
            <Link className='font-bold text-indigo-300 uppercase mx-8 my-2' to="/todo-list">TodoList</Link>
            <Link className='font-bold text-indigo-300 uppercase mx-8 my-2' to="/calculator">Calculator</Link>
        </div>
    )
}
