import {
    createStore,
    applyMiddleware,
    combineReducers
} from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.warn("cek state stores", store.getState());
});
export default store;
