import { createStore } from "redux";
import rootreducer from "../reducer/rootreducer";
import productreducer from "../reducer/productreducer";

const store=createStore(rootreducer);
export default store;