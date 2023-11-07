import { combineReducers } from 'redux';
import productList from "../Reducer/ProductReducer";

const rootReducer = combineReducers({
    productList,
})

export default rootReducer