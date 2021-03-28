import React from 'react'
import ResultComponent from './components/results';
import ButtonComponent from  './components/button';

const Counter = () => {
    return (
        <div className='w-64 flex flex-col mt-16 h-64 items-center m-auto bg-white rounded shadow-lg p-8 m-4'>
            <ResultComponent className="mt-4"/>
            <div className="flex justify-around mt-8">
                <ButtonComponent name = "increment">+</ButtonComponent>
                <ButtonComponent name = "decrement">-</ButtonComponent>
            </div>
            <div className="mt-4">
                <ButtonComponent name = "reset">reset</ButtonComponent>
            </div>
        </div>
    )
}
export default React.memo(Counter);
