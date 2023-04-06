import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) =>{
      return(
            <nav className="nav">
                  <SearchBar onSearch={onSearch}/>
                  <div className="navBotones">
                  <button className="boton">
                        <Link className="link" to='/about'> ABOUT</Link>
                  </button>
                  <button>
                        <Link className="link" to='/home'> HOME</Link>
                  </button>
                  </div>
            </nav>
      )
}

export default Nav;