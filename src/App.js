import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import About from './routes/about/About'
import Search from './routes/search/Search'
import Home from './routes/home/Home';


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/about' element={<About />}/>
      <Route  path='/search' element={<Search />}/>
    </Routes>
    <Home />
    </BrowserRouter>
    </>
  );
}

export default App;
