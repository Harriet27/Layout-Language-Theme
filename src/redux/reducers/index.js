import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { photoReducer } from "./photoReducer";

export default combineReducers({
    todo: todoReducer,
    photo: photoReducer,
});
