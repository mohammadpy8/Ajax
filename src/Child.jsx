import React from 'react';


const Child = (props) => {
    
    const { clickHandler, number } = props;

    return (
        <div>
            <button onClick={clickHandler}>increase</button>
            <h1>{number}</h1>
        </div>
    );
};

export default Child;