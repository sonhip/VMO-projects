import React from 'react'
import {
  Link
} from "react-router-dom";
export default function Navbar() {
    return (
        <div className='flex justify-around items-center fixed h-16 w-full bg-gray-700'>
            <div>
                <img alt="VMO" className="flex" src='https://mail.google.com/mail/u/1?ui=2&ik=f1ea2efa92&attid=0.1&permmsgid=msg-f:1695004496030682881&th=1785dd9bce994f01&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_TLUbQ8udrp1C46Q5phWBGtQzByjQOCcDyl93qqNbUJbbYCIAUF8wIcwJ7afk6am5rbn0QwCgVjr7L_zc0p7rg_ROOzSajrUmGhqslRLCR-uIh99jvgyFG7y4&disp=emb'/>
            </div>
            <div className="flex">
                <Link className='font-bold text-gray-300 hover:text-white uppercase mx-8 my-2' to="/">Counter</Link>
                <Link className='font-bold text-gray-300 hover:text-white uppercase mx-8 my-2' to="/random-quotes">Randomquotes</Link>
                <Link className='font-bold text-gray-300 hover:text-white uppercase mx-8 my-2' to="/todo-list">TodoList</Link>
                <Link className='font-bold text-gray-300 hover:text-white uppercase mx-8 my-2' to="/calculator">Calculator</Link>
            </div>
        </div>
    )
}
