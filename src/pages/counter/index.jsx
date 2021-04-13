import React from 'react'
import ResultComponent from './components/results';
import ButtonComponent from  './components/button';

const Counter = () => {
    return (
<<<<<<< HEAD:src/pages/counter/index.jsx
        <div className=''>
            <h3 className="">This is Counter</h3>
=======
       <div className='counter h-screen flex items-center justify-center'>
            <div className='w-64 flex flex-col h-64 items-center bg-white rounded shadow-lg p-8 m-4'>
            <ResultComponent className="mt-4"/>
            <div className="flex justify-around mt-8">
                <ButtonComponent name = "increment">+</ButtonComponent>
                <ButtonComponent name = "decrement">-</ButtonComponent>
            </div>
            <div className="mt-4">
                <ButtonComponent name = "reset">reset</ButtonComponent>
            </div>
>>>>>>> 30bd88ddb761878f009f01da70e9c980555efa22:src/components/pages/counter/index.jsx
        </div>
       </div>
    )
}
export default React.memo(Counter);
