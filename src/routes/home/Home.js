// TODO make this page responsive, finalize the css

import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import How from './components/How'
import Find from './components/Find'


import './Home.css'



function Home() {
  return (
    <>
      <Hero />
      <Services /> 
      <How />
      <Find />
    </>
  )
}

export default Home


