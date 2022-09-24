import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from './reducer/RootReducer'

const initialState = {};
const middleWare = [thunk];
const store = createStore(
    RootReducer,
    initialState,
    compose(applyMiddleware(...middleWare))
);

export default store;