import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

const initialState = {

    loading: true,
    post: {},
    error: ""

};

const fetchReducer = (state, action) => {

    switch (action.type) {
        
        case "SUCCESS":

            return {
                loading: false,
                post: action.payload,
                error:""
            }
        case "FAILED":

            return {
                loading: false,
                post: {},
                error: "An is Error",
            }
        
        default:
            return state;
    }
}

const FetchData = () => {

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(res => { dispatch({type: "SUCCESS", payload: res.data})
                // setLoading(false);
                // setPost(res.data);
                // setError("");
            })
            .catch(err => {
                setLoading(false);
                setPost({});
                setError("An is Error");
            })

    }, []);

    const [fetching, dispatch] = useReducer(fetchReducer, initialState);

    return (
        <div>
            
        </div>
    );
};

export default FetchData;