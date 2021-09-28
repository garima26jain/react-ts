import { ActionType } from "../action-types";
import { Action } from "../actions";

//this file is a good eg of 
//setting up reducer
//type our different action interfaces 
//actiontype enum used in reducer & action interface



interface RepoState{
    loading: boolean,
    error: string | null,
    data: string[]
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

/*--------------- //for each action we r creating a seperate interface
interface SearchRepoAction{
    type: ActionType.SEARCH_REPO,
}

interface SearchRepoSuccessAction{
    type: ActionType.SEARCH_REPO_SUCCESS,
    payload: string[]
}

interface SearchRepoErrorAction{
    type: ActionType.SEARCH_REPO_ERROR,
    payload: string
}

----------------*/
//since assigning the action interfaces to action argument can be really tedious , therefore 
//type that represent all diff possible action that can be processed by the reducer
/*-------
type Action  =
| SearchRepoAction 
| SearchRepoSuccessAction 
| SearchRepoErrorAction
------*/


//since we r using the action type strings inside the reducer as well as interface , redundant so not a good idea
//hence making a enum -- enum just like obj that has properties which r very closely related
/* purpose of naking action types is to avoid typos since we use it many places
enum ActionType {
    SEARCH_REPO = 'search_repo',
    SEARCH_REPO_SUCCESS = 'search_repo_success',
    SEARCH_REPO_ERROR = 'search_repo_error'
}
*/

//the colon followed by state tells that return  value of Reducer must always match the interface
const reducer =(
    state: RepoState = initialState, 
    //action argument is one of the different types of action inside the app
    //we define seperate interface for every kind of action
    // action: SearchRepoAction | SearchRepoSuccessAction | SearchRepoErrorAction -- earlier ,assigning too many like this can be really tedious
    action: Action
    ): RepoState => {
    //inside reducers we write the type guards to figure out for ts specially what kind of action really is
    // here switch statement function as type guard in ts as well
    switch(action.type){
        //case 'search_repo': -- earlier without actiontype enum
        case ActionType.SEARCH_REPO:
            return {loading: true, error: null, data:[]}
        case ActionType.SEARCH_REPO_SUCCESS:
            //100 % certain that 'action' is SearchRepoSuccessAction
            return {loading: false, error: null, data:action.payload}
        case ActionType.SEARCH_REPO_ERROR:
            return {loading: false, error: action.payload, data:[]}

        default:
            return state
    }
}

export default reducer