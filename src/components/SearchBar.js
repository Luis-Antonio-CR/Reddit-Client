import { useSearchParams, createSearchParams } from "react-router-dom";

const SearchBar = () => {
    const [ searchParams, setSearchParams ] = useSearchParams();
    
    const handleSubmit = (e) => {

        const title = e.target.value;

        setSearchParams(createSearchParams({ title : title }));
        
    }

    return(
        <div>
            <form onChange={handleSubmit} className="searchBar">
                <input type="text" className="searchBar-text" placeholder="Search"/>
            </form>
        </div>
    )
}

export default SearchBar;