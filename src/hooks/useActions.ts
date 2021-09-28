import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
//hook to automatically give us access to all our action creators inside the componen ts 
export const useActions = () => {
    const dispatch = useDispatch()
    //1st arg -- containing bunch of different action creators
    return bindActionCreators(actionCreators, dispatch)
    // this returns us an obj containing all diff kinds of actioncreators --usually 
    //but now return value will be automatically taken & provided to dispatch

}

//using type-def files for redux-thunk is bit challenging