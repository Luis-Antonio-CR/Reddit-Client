import logo from "../assets/Reddit_Client_Logo.png";
import SearchBar from "./SearchBar";

const NavBar = () => {
    return(
        <div className="navbar" alt="">
            <div className="logo">
                <img src={logo}/>
                <h2>Reddit Client</h2>
            </div>
            
            <SearchBar />

        </div>
    )
}

export default NavBar;