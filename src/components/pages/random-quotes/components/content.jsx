import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getApiUser} from '../actions/index';
const Content = ({index, color}) => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.RandomQuotesReducer.loading);
    const dataQuotes = useSelector(state => state.RandomQuotesReducer.dataQuotes);

    useEffect(() => {
       dispatch(getApiUser())
    },[dispatch])
    if(loading){
        return(<h1>Loading...</h1>)
    }
    return (
        <div className="p-6 outline-none transition duration-1000" style={{color: color}}>
            <p className="font-serif italic font-bold m-8 tracking-wider">{dataQuotes?.quotes?.[index]?.quote}</p>
            <div className="text-center mt-4">__{dataQuotes?.quotes?.[index]?.author}__</div>
        </div>
    )
}
export default Content;