import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/HomeComponent/Home';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import './App.css'
import About from './components/About/About';

const App = () => {
  return (
    <Router>
<Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    

 </Routes>
 <Footer/>
 </Router>
  )
}

export default App
