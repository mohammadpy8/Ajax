import React, { useState } from 'react';
import axios from 'axios';

const SendPost = () => {

    const [sendData, setSendData] = useState({

        title: "",
        body: "",
    })

    const changeHandler = (e) => {
        
        setSendData({
            ...sendData,
            [e.target.name]: e.target.value,
        })

    }

    const postHandler = () => {

        
        axios.post("https://jsonplaceholder.typicode.com/posts", {

            title: sendData.title,
            body: sendData.body
            
        })
            .then(res => console.log(res));

    }

    return (
        <div>
            <input type="text" name="title" value={sendData.title} onChange={changeHandler} />
            <input type="text" name="body" value={sendData.body} onChange={changeHandler} />
            <button onClick={postHandler}>sendPost</button>
        </div>
    );
};

export default SendPost;