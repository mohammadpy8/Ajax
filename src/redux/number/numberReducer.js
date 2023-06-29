const initialState = {
    number: 0
};

const numberReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case "INCREASE_NUMBER":
            return {
                ...state,
                number: state.number + 1,
            }
        case "DECREASE_NUMBER":
            return {
                ...state,
                number: state.number - 1,
            }
        default:
            return state;
    }
};

export default numberReducer;