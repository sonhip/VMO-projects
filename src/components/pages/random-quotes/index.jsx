import React, {useState} from 'react';
import Content from './components/content';
import Button from './components/button';
import {useSelector} from 'react-redux';

export default function RandomQuotes() {
    const colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
    ];
    const dataQuotes = useSelector(state => state.RandomQuotesReducer.dataQuotes.quotes);
    const random = (value) => {
        return Math.floor(Math.random() * value?.length)
    }
    const [state, setState] = useState(0);
    const [color, setColor] = useState(colors[random(colors)])
    
    const luckyNumber = () => {
        setState(random(dataQuotes));
        setColor(colors[random(colors)])
    }

    return (
        <div className='randomQuotes transition duration-1000 h-screen flex justify-center items-center' style={{backgroundColor: color}}>
            <div className="bg-white rounded sm:w-1/3 flex flex-col items-center border-2 border-red-300">
            <Content index={state} color={color} />
            <Button num = {luckyNumber} color={color}/>
            </div>
        </div>
    )
}
