import React, { useEffect, useState} from 'react';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Reviews from './components/Reviews/Reviews';
// import Footer from './components/Footer/Footer';
import Error from './components/Error Page/Error';
import MobileNav from './components/MobileNav/MobileNav';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';

function App() {
  const [windowDimension, setWindowDimension] = useState(null);
    useEffect(() => {
      setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
      function handleResize() {
        setWindowDimension(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  const isMobile = windowDimension <= 640;

  return (
    <Router>
      {isMobile ? (
        <MobileNav/>
      ) : <Nav/> }
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/testimonials" element={<Reviews/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes> 
      {/* <Footer/> */}
    </Router>
  )
}

export default App;
