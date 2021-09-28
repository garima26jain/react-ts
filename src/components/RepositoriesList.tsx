import { useState } from "react"
//it gives access to dispatch fx in the component directly 
//import { useDispatch } from "react-redux";
//use this fx to manually dispatch action-creators
//import { actionCreators } from "../state";
import { useActions } from "../hooks/useActions";
//import { useSelector } from "react-redux"; // this is similar to mapStateToProps 
//instead of  useSelector , we use the type hook
import { useTypeSelector } from "../hooks/useTypeSelector";

const RepositoriesList: React.FC = () =>{
    //local state to track what user types 
    const [term, setTerm] = useState('');
    // const dispatch = useDispatch();
    const { searchRepo } = useActions();
    const {data, error, loading} = useTypeSelector((state) => state.repositories) // it accepts a fx that receives entire state of redux store
    //console.log("state", state);
    //useSelector has no idea abt type of data in redux store ---here if we directly access state prop without annotation then we get an error
    // ERROR : property 'propname' doesn't exists on type 'DefaultRootState'
    //so by providing the type to state we tell the ts about the kind of redux

    //communicating the type info to react-redux via useTypeSelector hook 
    //we removed the any type from state ,& hover over the state we can see the type of state inside the redux store
    //& now the state.repositories (here) can be accessed, & destructuring it further also tells the correct type of it too

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        //this below code looks too lengthy -- so condense it 
        // dispatch((actionCreators.searchRepo(term)))
        searchRepo(term)
    }

    return <div>
        <form onSubmit={handleSubmit}>
          <input value={term} onChange={e => setTerm(e.target.value)}/>
          <button>Search</button>  
        </form>
        {/* to display list, get access to some state stored inside the redux store inside of our component */}
        {error && <h3>{error}</h3>}
        {loading && <h3>loading...</h3>}
        {!error && !loading && 
            data.map((name)=> <div key={name}>{name}</div>)}
    </div>
}

export default RepositoriesList