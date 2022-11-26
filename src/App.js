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
      <Route  path='/polidoServices' element={<Home />}/>
      {/* TODO  how to set path for home page so when loaded on github will appear correctly*/}
      <Route  path='/polidoServices/about' element={<About />}/>
      <Route  path='/polidoServices/search' element={<Search />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
