import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper yellow">
        <Link to="/" className="brand-logo">
          ROOMWALA
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/signin">Signin</Link>
          </li>

          <li>
            <Link to="/signup">Signup</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
