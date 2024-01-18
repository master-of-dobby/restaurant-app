import { useState } from "react";
import {LOGO_URL} from "./common/constants";
import { Link } from "react-router-dom";

// conditional rendering

const Header = () => {

  const [isLoggedIn, setIsLoggedIN] = useState(false);


    return(
      <div className="header">
          <div className="logo">
              <img src={LOGO_URL} alt="restaurant-logo"></img>
          </div>
          <div className="nav-items">
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/instamart">Instamart</Link>
              <Link to="/cart">Cart</Link>
  
            </ul>

          </div>

          
          {isLoggedIn? <button onClick={ () => {setIsLoggedIN(false)}}>Logout</button>
             : <button onClick={() => {setIsLoggedIN(true)}}>Login</button>}

  
      </div>
  
    )
  }

export default Header;