const initialState = {
    loading: false,
    users: [],
    error: "",
};

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case "USERS_REQUEST":
            return {
                loading: true
            }
        case "USERS_SUCCESS":
            return {
                loading: false,
                users: action.payload,
            }
        case "USERS_FAILRES":
            return {
                loading: false,
                users: [],
                error: action.payload,
            }
        default:
            return state;
    }
};

export default userReducers;