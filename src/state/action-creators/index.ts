import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchRepo = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        // this datatype for dispatch is telling ts that we r getting a fx here that can only be called with some arg
        //that matches the action defined there 
        // this is basically for dispatching the correct type of action else in payload we can assign any type of value
        dispatch({
            type: ActionType.SEARCH_REPO
        })
        try{
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }//this will give query string to that url
            })

            const names = data.objects.map((obj: any) =>{
                return obj.package.name
            })

            dispatch({
                type: ActionType.SEARCH_REPO_SUCCESS,
                payload: names
            })

        } catch (error) {
            dispatch({
                type: ActionType.SEARCH_REPO_ERROR,
                payload: error.message
            })
        }
    }
}