import React from 'react';
import ButtonBase from './button-base';

const WrapButtonBases = ({handleClick}) => {
    return(
        <div className="grid grid-cols-4 gap-0.5 grid-rows-5 wrapButtons">
            <button onClick={(e) => handleClick(e.target.value)} value="AC" className="col-start-1 col-end-3 bg-red-beauty focus:outline-grey hover:outline-grey cursor-default">AC</button>
            <button onClick={(e) => handleClick(e.target.value)} value="/" className="bg-black-operator focus:outline-grey hover:outline-grey cursor-default">/</button>
            <button onClick={(e) => handleClick(e.target.value)} value="*" className="bg-black-operator focus:outline-grey hover:outline-grey cursor-default">x</button>
            <ButtonBase handleClick={handleClick}>7</ButtonBase>
            <ButtonBase handleClick={handleClick}>8</ButtonBase>
            <ButtonBase handleClick={handleClick}>9</ButtonBase>
            <button onClick={(e) => handleClick(e.target.value)} value="-" className="bg-black-operator focus:outline-grey hover:outline-grey cursor-default">-</button>
            <ButtonBase handleClick={handleClick}>4</ButtonBase>
            <ButtonBase handleClick={handleClick}>5</ButtonBase>
            <ButtonBase handleClick={handleClick}>6</ButtonBase>
            <button onClick={(e) => handleClick(e.target.value)} value="+" className="bg-black-operator focus:outline-grey hover:outline-grey cursor-default">+</button>
            <ButtonBase handleClick={handleClick}>1</ButtonBase>
            <ButtonBase handleClick={handleClick}>2</ButtonBase>
            <ButtonBase handleClick={handleClick}>3</ButtonBase>
            <button onClick={(e) => handleClick(e.target.value)} value="=" className="row-start-4 row-end-6 col-start-4 text-white bg-blue-equal focus:outline-grey hover:outline-grey cursor-default">=</button>
            <button onClick={(e) => handleClick(e.target.value)} value="0" className="col-start-1 col-end-3 row-start-5 bg-black-base text-white focus:outline-grey hover:outline-grey cursor-default">0</button>       
            <ButtonBase handleClick={handleClick}>.</ButtonBase>
           
        </div>
    )
}
export default React.memo(WrapButtonBases);