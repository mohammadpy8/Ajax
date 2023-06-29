import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';

const Data = () => {

    const [getData, setGetData] = useState([]);

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => setGetData(res.data))

    }, [])

    return (
        <div>
            {
                getData.map(post => (
                    <h2 key={post.id}>{post.title}</h2>
                ))
            }
        </div>
    );
};

export default Data;