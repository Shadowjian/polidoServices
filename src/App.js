import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import About from './routes/about/About'
import Search from './routes/search/Search'
import Home from './routes/home/Home';
import Faqs from './routes/faqs/Faqs';
import "./App.css"
import Footer from './components/Footer';
import Terms from './routes/terms/Terms';
import Privacy from './routes/privacy/Privacy';



function App() {

  return (
    <>
    
    <HashRouter>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='about' element={<About />}/>
        <Route  path='search' element={<Search />}/>
        <Route  path='faqs' element={<Faqs />}/>
        <Route  path='terms' element={<Terms />}/>
        <Route  path='privacy' element={<Privacy />}/>
      </Routes>
      <Footer />
    </HashRouter>
    </>
  );
}

export default App;
