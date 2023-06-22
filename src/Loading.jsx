import React from 'react';

const Loading = (props) => {

    const { clickHandler, number } = props;

    return (
        <div>
            <button onClick={clickHandler}>up</button>
            <h2>{number}</h2>
        </div>
    );
};

export default Loading;