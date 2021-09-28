import { combineReducers } from "redux";
import repositoriesReducer  from "./repositoriesReducer";

const reducers =  combineReducers({
    repositories: repositoriesReducer // here the state inside our redux store will be a object having a key & its value will be coming from RHS 
})//now ts is sure that state will look like this 

export default reducers

//create a new type  that says/describes type of data inside of our redux store
export type RootState = ReturnType<typeof reducers>
//making use of builtin helper inside of ts , that accepts a fx (here reducers), & give us type of whatever the fx returns
// & hover over rootstate accurately describes the type of data inside our store
//the value for that is going to match the interface or satisfy the interface of reducer