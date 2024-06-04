import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/images/me.jpg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink className="link" exact to="/">
          <img src={Logo} alt="logo" />
          <h2>BM</h2>
        </NavLink>
      </div>
      <div>
        <nav className="nav_content">
          <NavLink className="link" activeClassName="active" to="/about">
            About
          </NavLink>
          <NavLink className="link" activeClassName="active" to="/projects">
            Portfolio
          </NavLink>
          <NavLink className="link" activeClassName="active" to="/blog">
            Writings
          </NavLink>
        </nav>
      </div>

      <div className="social">
      <a
              href="linkedin.com/in/muhammed-badmus-a02303258"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>

        <hr />

        <a
              href="https://github.com/ishola10"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-square-github"></i>
            </a>
      </div>
    </div>
  );
};

export default NavBar;
