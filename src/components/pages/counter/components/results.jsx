import React from 'react';
import {useSelector} from 'react-redux';

const ResultComponent = () => {
    const state = useSelector(state => state.CounterReducer.count);
    return (
        <div>
            <h1 className="font-bold text-2xl">{state}</h1>
        </div>
    )
}
export default React.memo(ResultComponent);