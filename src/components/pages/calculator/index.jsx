import React, { useState } from 'react';
import WrapButtons from './components/wrap-buttons';
import Screen from './components/screen';
import './components/main.scss'

const Calculator = () => {
     const [screen, setScreen] = useState([]);
     const [result, setResult] = useState(0);
  
   const handleClick = (char) => {
        if(!isNaN(char)){
             const newArr = [...screen];
             newArr.push(char)
             setScreen(newArr)  
        }else {
               const newArr = [...screen];
             switch(char){
               case '=':
                    const x = [...newArr];
                    const y = x.join('');
                    const z = y.replace(/--/g, ' + ').replace(/\+/g, ' + ').replace(/-/g, ' -').replace(/\*/g, ' * ').replace(/\//g, ' / ');
                    const t = z.split(' ');
                    const k = t.map((item) => {
                         if(!isNaN(item)){
                             return item.includes('.') ? parseFloat(item) : parseInt(item)
                         }
                         return item
                    })

                    for(let i=0; i<k.length;i++){
                         if(k[i] === '*'){
                              const mul = k[i-1]* k[i+1];
                              k.splice(i-1, 3, mul);
                              i=i-2;
                         }else if(k[i] === '/'){
                              const quotient = k[i-1] / k[i+1];
                              quotient.toFixed(2);
                              k.splice(i-1, 3, quotient);
                              i=i-2;
                         }
                    }
                    let total = 0;
                    k.forEach((item) => {
                         if(!isNaN(item)){
                              total+= item;
                         }
                    })
                    setResult(total);
                    setScreen(String(total));
                   break;
               case '+':
                    if( (isNaN(newArr[newArr.length-2]) && isNaN(newArr[newArr.length-1]) ) ){
                         newArr.splice(newArr.length-2, 2, '+')
                         setScreen(newArr)                      
                    }else {
                         newArr.push('+')
                         setScreen(newArr)
                    }
                    break;
               case '-':
                    if( (isNaN(newArr[newArr.length-2]) && isNaN(newArr[newArr.length-1]) ) ){
                         newArr.splice(newArr.length-2, 2, '-')
                         setScreen(newArr)          
                    }else {
                         newArr.push('-')
                         setScreen(newArr)
                    }
                    break;
               case '*':
                    if( (isNaN(newArr[newArr.length-2]) && isNaN(newArr[newArr.length-1]) ) ){
                         newArr.splice(newArr.length-2, 2, '*')
                         setScreen(newArr)          
                    }else {
                         newArr.push('*')
                         setScreen(newArr)
                    }
                    break;
               case '/':
                    if( (isNaN(newArr[newArr.length-2]) && isNaN(newArr[newArr.length-1]) ) ){
                         newArr.splice(newArr.length-2, 2, '/')
                         setScreen(newArr)          
                    }else {
                         newArr.push('/')
                         setScreen(newArr)
                    }
                    break;
               case '.':
                    if( (isNaN(newArr[newArr.length-2]) && isNaN(newArr[newArr.length-1]) ) ){
                         newArr.splice(newArr.length-2, 2, '.')
                         setScreen(newArr)          
                    }else if(newArr[newArr.length-1] === '.'){
                         setScreen(newArr);
                    }else {
                         newArr.push('.')
                         setScreen(newArr)
                    }
                    break;
               case 'AC':
                    setScreen([]);
                    setResult(0)
                    break;
               default: 
                    console.log('wtf???');
                    break;
             }
        }
   }
  

 
    return (
       <div className="h-screen flex justify-center items-center">
            <div className="w-72 border-2 m-auto bg-black p-2">
                <Screen screen={screen}  equal={result} />
                <WrapButtons handleClick={handleClick} />
            </div>
       </div>
    )
}
export default React.memo(Calculator);
