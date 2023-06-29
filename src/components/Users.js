import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchUsers from '../redux/users/usersAction';
import { useEffect } from 'react';

const Users = () => {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.users);

    useEffect(() => {

        dispatch(fetchUsers())

    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Users;