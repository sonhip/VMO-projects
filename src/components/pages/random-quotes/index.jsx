import React, {useState} from 'react';
import Content from './components/content';
import Button from './components/button';
import {useSelector} from 'react-redux';

export default function RandomQuotes() {
    const dataQuotes = useSelector(state => state.RandomQuotesReducer.dataQuotes.quotes);
    const [state, setState] = useState(0);
    const randomNumber = () => {
        return Math.floor(Math.random() * dataQuotes?.length)
    }
    
    const luckyNumber = () => {
        setState(randomNumber());
    }

    return (
        <div className="bg-indigo-300 rounded sm:m-auto sm:w-3/6 sm:h-64 flex flex-col items-center border-2 border-red-300">
            <Content index={state}/>
            <Button num = {luckyNumber}/>
        </div>
    )
}
