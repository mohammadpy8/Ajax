import React from 'react';
import { useReducer } from 'react';

const initialstate = {
    num1:0,
};

const counterReducer = (state, action) => {

    switch (action.type) {
        case "INCREASE":
            return {num1 : state.num1 + 1};

        case "DECREASE":
            return {num1: state.num1 - 1};

        case "RESET":
            return initialstate;
        default:
            return state;
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(counterReducer, initialstate);

    return (
        <div>
            <button onClick={() => dispatch({type: "INCREASE"})}>increase</button>
            <button onClick={() => dispatch({type: "DECREASE"})}>decrease</button>
            <button onClick={() => dispatch({type: "RESET"})}>reset</button>
            <h1>{state.num1}</h1>
        </div>
    );
};

export default Counter;