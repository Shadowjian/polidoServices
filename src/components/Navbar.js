import React from 'react'
import { Link } from 'react-router-dom'

const style = {
  color: 'red',
  fontSize: '3rem'
}



function Navbar() {
  return (
    <>
    <Link to="/" style={style}>Home</Link>
    <Link to="about">About</Link>
    <Link to="contact">Search</Link>
    </>
  )
}

export default Navbar