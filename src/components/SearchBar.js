import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../store/redditSlice";

const SearchBar = () => {
    const [ searchTermLocal, setSearchTermLocal ] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {

        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    }

    const handleChange = (e) =>{
        setSearchTermLocal = e.target.value;
    }

    useEffect(()=> {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    return(
        <div>
            <form onSubmit={handleSubmit} className="searchBar">
                <input type="text" className="searchBar-text" onChange={handleChange} placeholder="Search"/>
                <button type="submit" onClick={handleSubmit} className="searchBar-button">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;