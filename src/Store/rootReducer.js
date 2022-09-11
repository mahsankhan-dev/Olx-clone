import { combineReducers } from "redux";
import reducer from "./Reducer/UserReducer";
import themeReducer from "./Reducer/themeReducer";

export default combineReducers({
    reducer,
    themeReducer
})