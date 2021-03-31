import React from 'react';

const Button = ({num, color}) => {
    return (
        <button onClick={num} style={{backgroundColor: color}} className="m-4 mt-12 bg-red-300 hover:bg-red-400 focus:outline-none text-white px-4 py-2 rounded font-medium transition duration-1000">New Quote</button>
    )
}
export default Button;