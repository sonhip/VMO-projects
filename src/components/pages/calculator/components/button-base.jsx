import React from 'react';
import './main.scss';

const ButtonBase = ({handleClick, children}) => {
    return(
        <button onClick={(e) => handleClick(e.target.value)} value={children} className="button_base">{children}</button>
    )
}

export default React.memo(ButtonBase);