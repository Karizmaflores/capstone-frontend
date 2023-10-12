// import React from 'react';
import { Link } from "react-router-dom";
// import '../index.css';
import "../css/header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1>Student Living Furniture Log</h1>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
