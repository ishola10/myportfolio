import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";
import Projects from "./components/Project.js";
import Contact from "./components/Contact.js";
import ErrorPage from "./components/ErrorPage.js";
import About from "./components/About.js";
import Logo from "./assets/images/me.jpg";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="navbar">
            <div className="logo">
              <Link className="link" to="/">
                <img src={Logo} alt="logo" />
                <h2>BM</h2>
              </Link>
            </div>
            <div>
              <nav className="nav_content">
                {/* <Link className="link" to="/">
                  Home
                </Link> */}
                <Link className="link" to="/about">
                  About
                </Link>
                <Link className="link" to="/projects">
                  Projects
                </Link>
                <Link className="link" to="/contact">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
