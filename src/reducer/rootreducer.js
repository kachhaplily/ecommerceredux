import productreducer from "./productreducer";
import addtocartreducer from "./addtocartreducer";
import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
const rootreducer=combineReducers({
    Products:productreducer,
    cart:addtocartreducer,
    search:searchReducer,

})
export default rootreducer