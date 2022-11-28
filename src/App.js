import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import About from './routes/about/About'
import Search from './routes/search/Search'
import Home from './routes/home/Home';

import "./App.css"


function App() {

  return (
    <>
    <HashRouter>
      <Navbar />
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='about' element={<About />}/>
      <Route  path='search' element={<Search />}/>
    </Routes>
    </HashRouter>
    </>
  );
}

export default App;
