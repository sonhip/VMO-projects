import React from 'react';
import WrapButtons from './components/wrap-buttons';
import Screen from './components/screen';
import './components/main.scss'

const Calculator = () => {
    return (
       <div className="h-screen flex justify-center items-center">
            <div className="w-72 border-2 m-auto bg-black p-2">
                <Screen/>
                <WrapButtons/>
            </div>
       </div>
    )
}
export default React.memo(Calculator);
