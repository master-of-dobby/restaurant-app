import {LOGO_URL} from "./common/constants";

const Header = () => {
    return(
      <div className="header">
          <div className="logo">
              <img src={LOGO_URL} alt="restaurant-logo"></img>
          </div>
          <div className="nav-items">
            <ul>
              <li><a href="#Home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#Cards">Card</a></li>
  
            </ul>
          </div>
  
      </div>
  
    )
  }

export default Header;