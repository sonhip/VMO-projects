import React, { useState } from 'react';
import WrapButtons from './components/wrap-buttons';
import Screen from './components/screen';
import './components/main.scss'

const Calculator = () => {
   const [state, setState] = useState({
      
   })
   setState('a')
   console.log(state);

   const handleClick = (char) => {
        
        console.log(char);
   }
    return (
       <div className="h-screen flex justify-center items-center">
            <div className="w-72 border-2 m-auto bg-black p-2">
                <Screen currentNumber={state.currentNumber} />
                <WrapButtons handleClick={handleClick} />
            </div>
       </div>
    )
}
export default React.memo(Calculator);
