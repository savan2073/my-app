import { AccountBox, Notifications, Search } from "@mui/icons-material"
import "./Navbar.css"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1024px-IMDB_Logo_2016.svg.png" 
                    alt="Internet Movie Database"
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>Top 100</span>
                </div>
                <div className="right">
                    <Search className = "icon"/>
                    <span>KID</span>
                    <Notifications className = "icon"/>
                    <AccountBox className = "icon"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar