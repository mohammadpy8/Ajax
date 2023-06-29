import axios from "axios"

const usersRequest = () => {
    return {
        type: "USERS_REQUEST"
    }
}
const usersSuccess = (users) => {
    return {
        type: "USERS_SUCCESS",
        payload: users
    }
}
const usersFailres = (error) => {
    return {
        type: "USERS_FAILERS",
        payload: error,
    }
};

const fetchUsers = () => {
    return (dispatch) => {

        dispatch(usersRequest())

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                const data = res.data;
                dispatch(usersSuccess(data))
            })
            .catch(err => {
                const errMsg = err.message;
                dispatch(usersFailres(errMsg));
            })
    }
}

export { usersFailres, usersRequest, usersSuccess };
export default fetchUsers;