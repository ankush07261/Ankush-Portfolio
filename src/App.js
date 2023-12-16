import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Home from './components/Home';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'

function App() {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <Navbar />
        </React.Fragment>
        
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/about-me" element={< AboutMe/>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
