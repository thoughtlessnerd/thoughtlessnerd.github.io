import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./assets/fonts/Gotham-Font/Gotham-Bold.otf";
import "./assets/fonts/Gotham-Font/Gotham-Light.otf";
import { HashRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
