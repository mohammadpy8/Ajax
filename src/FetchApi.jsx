import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

const FetchApi = () => {

    const [data, setData] = useState([]);
    const [sendPosts, setSendPosts] = useState([]);
    const [getData, setGetData] = useState([]);

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => (
                setGetData(res.data)
            ));

    }, [])

    const sendPost = () => {

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'mohammad',
                body: 'seyfollahi',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    const deleteData = () => {

        fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE"
        });

    }

    return (
        <div>
            {/* {
                data.map(item => (
                    <h1 key={item.id}>{item.title}</h1>
                ))
            } */}
            <button>get</button>
            <button onClick={sendPost}>sendPost</button>
            <div>
                <button onClick={deleteData}>delete data</button>
            </div>
            <div>

                <div>
                    {
                        getData.map(data => <p key={data.id}>{data.title}</p>)
                    }
                </div>

            </div>
        </div>
    );
};

export default FetchApi;