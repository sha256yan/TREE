import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
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
      <ul className="all-menu-items">
        <li className="menu-item">
          <Link to="/governance" className="menu-descr">
            Governance
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/transaction" className="menu-descr">
            Transaction
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/about" className="menu-descr">
            About Us
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/profile" className="menu-descr">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
