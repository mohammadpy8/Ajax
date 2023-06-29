import React from 'react';
import { increase, decrease } from './redux/counter/counterAction';
import {  useSelector, useDispatch } from 'react-redux';

const CounterNumber = () => {

    const state = useSelector(state => state.counter.counter);
    const dispatch = useDispatch();

    return (
        <div>

            <div>
                <h1>counter: {state}</h1>
                <button onClick={() => dispatch(increase())}>increase</button>
                <button onClick={() => dispatch(decrease())}>decrease</button>
            </div>
            
        </div>
    );
};

export default CounterNumber;