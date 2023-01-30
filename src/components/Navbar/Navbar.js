import { AccountBox, Notifications, Search } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1024px-IMDB_Logo_2016.svg.png" 
                    alt="Internet Movie Database"
                    />
                    <span><Link className="nav-link" to ={"/"}>Homepage</Link></span>
                    <span><Link className="nav-link" to={"/series"}>Series</Link></span>
                    <span><Link className="nav-link" to={"/movies"}>Movies</Link></span>
                </div>
                <div className="right">
                    <Link to={"/search"}><Search className="icon"></Search></Link>
                    <span>User</span>
                    <Notifications className = "icon"/>
                    <AccountBox className = "icon"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar