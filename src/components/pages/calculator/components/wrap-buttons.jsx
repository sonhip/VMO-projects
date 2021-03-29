import React from 'react';
import ButtonBase from './button-base';

const WrapButtonBases = () => {
    return(
        <div class="grid grid-cols-4 gap-0.5 grid-rows-5">
            <button className="col-start-1 col-end-3 bg-red-beauty hover:outline-grey focus:outline-none">AC</button>
            <button className="bg-black-operator hover:outline-grey focus:outline-none">/</button>
            <button className="bg-black-operator hover:outline-grey focus:outline-none">x</button>
            <ButtonBase>7</ButtonBase>
            <ButtonBase>8</ButtonBase>
            <ButtonBase>9</ButtonBase>
            <button className="bg-black-operator hover:outline-grey focus:outline-none">-</button>
            <ButtonBase>4</ButtonBase>
            <ButtonBase>5</ButtonBase>
            <ButtonBase>6</ButtonBase>
            <button className="bg-black-operator hover:outline-grey focus:outline-none">+</button>
            <ButtonBase>1</ButtonBase>
            <ButtonBase>2</ButtonBase>
            <ButtonBase>3</ButtonBase>
            <button className="row-start-4 row-end-6 col-start-4 text-white bg-blue-equal hover:outline-grey focus:outline-none">=</button>
            <button className="col-start-1 col-end-3 row-start-5 bg-black-base text-white hover:outline-grey focus:outline-none">0</button>       
            <ButtonBase>.</ButtonBase>
           
        </div>
    )
}
export default React.memo(WrapButtonBases);