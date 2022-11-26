import React from 'react'
import { Link } from 'react-router-dom'

const style = {
  color: 'red',
  fontSize: '3rem'
}



function Navbar() {
  return (
    <>
    <Link to="/polidoServices" style={style}>Home</Link>
    <Link to="/polidoServices/about">About</Link>
    <Link to="/polidoServices/contact">Search</Link>
    </>
  )
}

export default Navbar