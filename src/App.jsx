import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import MyWork from "./Components/MyWork/MyWork";
// import Mywork2 from "./Components/MyWork/Mywork2";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/profile";
// import Services from './Components/Services/Services'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certification" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
