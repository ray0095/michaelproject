import React from 'react';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Reviews from './components/Reviews/Reviews';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
        </Routes> 
    </Router>
  )
}

export default App;
