import React, { useState } from "react";
import "./Navbar.css";
//import { SiAnaconda } from "react-icons/si";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";
import Button from "../UI/button/Button";
import "../UI/button/Button.css";
//import logos from "../../assets/logos.png";
import { Link } from "react-router-dom";
//import Home from "../../components/Pages/Home/Home";
//import Login from "../Pages/Login/login";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="container navbar">
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#000" size={30} />
        ) : (
          <AiOutlineBars color="#000" size={27} />
        )}
      </div>
      <div className="logo">
        {/* <SiAnaconda color="#fff" size={33} /> */}
        <div className="pp">
          <img
            src="/logos.png"
            alt="phone"
            style={{ width: "150px", height: "100px" }}
          ></img>
        </div>
        <p className="logo-text">
          Bol
          <span>Stats</span>
        </p>
      </div>

      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Contactus">Contact</Link>
          </li>

          <li>
            <Link to="/Subscribe">Subscribe</Link>
          </li>

          {/* <li>
            <Link to="/PrivacyPolicy">Privacy Policy</Link>
          </li> */}

          {/*<li className="nav-btn">
                
                <a href="#faq" className='btn
  btn-dark'>Get Stareted</a></li>*/}

          <li className="nav-btn">
            <Button text={"help?"} btnClass={"btn-dark"} href={"#footer"} />
          </li>
        </ul>
      </menu>
    </nav>
  );
};

export default Navbar;
