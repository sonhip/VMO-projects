import React from 'react'
import ResultComponent from './components/results';
import ButtonComponent from  './components/button';

const Counter = () => {
    return (
       <div className='counter h-screen flex items-center justify-center'>
            <div className='w-64 flex flex-col h-64 items-center bg-yellow-100 mb-32 rounded shadow-lg p-8 m-4'>
            <ResultComponent/>
            <div className="flex justify-around mt-8">
                <ButtonComponent name = "decrement" btnStyle = 'w-10 font-bold bg-yellow-600'>-</ButtonComponent>
                <ButtonComponent name = "increment" btnStyle = 'w-10 font-bold bg-yellow-600'>+</ButtonComponent>
            </div>
            <div className="mt-4">
                <ButtonComponent name = "reset" btnStyle='w-16 bg-yellow-700'>reset</ButtonComponent>
            </div>
        </div>
       </div>
    )
}
export default React.memo(Counter);
