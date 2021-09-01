import React from "react";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="ul-1">
        <li className="li-1">
          <a className="a-1" href=".">
            Home
          </a>
        </li>
        <li className="li-1">
          <a className="a-1" href="#sobre">
            about
          </a>
        </li>
        <li className="li-1">
          <a className="a-1" href="mailto:allan.pereira.araujo02@gmail.com">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
