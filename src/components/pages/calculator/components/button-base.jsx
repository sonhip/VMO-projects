import React from 'react';
import './main.scss';

const ButtonBase = (props) => {
    return(
        <button className="button_base">{props.children}</button>
    )
}

export default React.memo(ButtonBase);