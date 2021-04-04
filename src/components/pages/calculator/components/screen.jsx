import React from 'react';

const Screen = ({screen, equal}) => {
    return (
        <div className="text-white text-right">
            <p className='overflow-hidden h-6 leading-5'>{screen}</p>
            <p className='text-2xl'>{equal}</p>
        </div>
    )
}
export default React.memo(Screen);