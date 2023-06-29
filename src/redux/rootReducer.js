import { combineReducers } from "redux";
import reducer from "./counter/counterReducer";
import numberReducer from "./number/numberReducer";
import userReducers from "./users/usersReducers";


const rootReducer = combineReducers({
    number: numberReducer,
    counter: reducer,
    users: userReducers,
});

export default rootReducer;