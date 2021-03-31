import React from 'react';

const Screen = ({currentNumber}) => {
    console.log(currentNumber)
    return (
        <div className="text-white text-right">
            <p className='h-6 leading-5'>{currentNumber}</p>
            <p className='text-2xl'>0</p>
        </div>
    )
}
export default React.memo(Screen);