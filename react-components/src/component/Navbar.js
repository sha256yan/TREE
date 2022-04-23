import React from "react";
import { Link } from "react-router-dom";
import {SignUp, SignIn, CryptoLogIn} from "./Auth";
import "./Navbar.css";

function NavMenuItem(props) {
  return (
    <li className="menu-item">
    <Link to={props.link} className="menu-descr">
      {props.text}
    </Link>
    </li>
  );
}




function Navbar(props) {
  return (
    <nav className="navigation-menu">
      <Link to="/" className="logo">
        <img
          src="images/treeicon.png"
          height="80px"
          alt="Trans"
          className="navigation-icon"
        ></img>
      </Link>


      <section className="login-signup-wrapper">
                    <CryptoLogIn></CryptoLogIn>
                    <SignUp></SignUp>
                    <SignIn></SignIn>
      </section>

      <ul className="all-menu-items">
        <NavMenuItem text="Governance" link="/governance"></NavMenuItem>
        <NavMenuItem text="Transaction"link="/transaction"></NavMenuItem>
        <NavMenuItem text="About Us"   link="/about"></NavMenuItem>
        <NavMenuItem text="Profile"    link="/profile"></NavMenuItem>
      </ul>



    </nav>
  );
}

export default Navbar;
