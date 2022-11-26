import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Search</Link>
    </>
  )
}

export default Navbar