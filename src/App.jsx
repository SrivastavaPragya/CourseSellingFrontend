import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/HomeComponent/Home';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import './App.css'
import About from './components/About/About';
import Services from './components/Services/Services';
import CourseSection from './components/CoursesSection/Courses'


const App = () => {
  return (
    <Router>
<Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/courses" element={<CourseSection />} />
    

 </Routes>
 <Footer/>
 </Router>
  )
}

export default App
