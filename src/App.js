import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home.js";
import Projects from "./views/Project.js";
import ProjectDescription from "./components/ProjectDescription.js";
import ErrorPage from "./views/ErrorPage.js";
import About from "./views/About.js";
import Blog from "./views/Blog.js";
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDescription />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
