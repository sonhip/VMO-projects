import React from 'react';

const Button = ({num}) => {
    return (
        <button onClick={num} className="m-4 mt-48 fixed bg-red-300 hover:bg-red-400 focus:outline-none  px-4 py-2 rounded font-medium">New Quote</button>
    )
}
export default Button;