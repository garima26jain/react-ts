import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
//combine all the diff parts in a store
//{} -- initial empty state
export const store = createStore(reducers, {}, applyMiddleware(thunk))