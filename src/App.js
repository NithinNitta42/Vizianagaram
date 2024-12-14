import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import About from "./Pages/About";
import Administration from "./Pages/Administration";
import ContactUs from "./Pages/Contact";
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import Persons from "./Pages/Persons";
const App = () => {
  return (
    <>
    <div>
      <Router>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/persons' element={<Persons/>}/>
        <Route path='/administration' element={<Administration/>}/>
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
    </Router> 
    </div>
      
    </>
  );
};

export default App;
