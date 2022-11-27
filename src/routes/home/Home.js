import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'

import './Home.css'

function Footer(){
  return (
    <>
    <h1>THIS IS THE HOME</h1>
    </>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <h1>THIS IS THE HOME PAGE</h1>
      <Services />
      <Footer />
    </>
  )
}

export default Home


