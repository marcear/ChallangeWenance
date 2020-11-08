import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//reducer
import peopleReducer from "../reducers/people";

const store = createStore(peopleReducer, applyMiddleware(thunk));

export default store;
