// TODO: Finalize the navbar design 
// TODO: Create the mobile version using modal 

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


function NavModal({hideNav}) {
  return (
    <div className='nav-modal-links'>
      <Link onClick={hideNav} className="link" to="/">Home Page</Link>
      <Link onClick={hideNav} className="link" to="about">About</Link>
      <Link onClick={hideNav} className="link" to="search">Search</Link>
      <Link onClick={hideNav} className="link" to="contacts">Contacts</Link>
  </div>
  )
}

function Login({hideLogin}) {
  return (
      <form action="" id='login-modal'>
        <i className="fa-solid fa-x close-btn" onClick={hideLogin}></i>
        <div className="join-modal">
          <h3 className="join-heading">Join Polido Services</h3>
          <div className="btnl btn-fb">Continue with Facebook</div>
          <div  className="btnl btn-google">Continue with Google</div>
          <div className="or"> OR </div>
          <div className="input">
              <input type="email" name="email" id="email" placeholder="Enter your email" />
          </div>
          <div  className="btnl login-continue">Continue</div>
          <div className="login-member">
            Already a member? <span className="ismember">Sign in</span>
          </div>
      </div>
    </form>
  )
}


function Navbar() {
const [navigation, setNavigation] = useState(false)
const [login, setLogin] = useState(false)



const showNav = () => {
  setNavigation(true)
 }
const hideNav = () => {
  setNavigation(false)
 }
 
 const showLogin = () => {
  setLogin(true)
 }
 const hideLogin = () => {
  setLogin(false)
 }



  return (
    <section id='navbar-wrapper'>
      <div id='navbar'>
        <i className="fa-solid fa-bars nav-btn" onClick={showNav}></i>
        <div id='logo'>
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        
        <div className='links'>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="about">About</Link>
          {/* <Link className="link" to="search">Search</Link> */}
          <a href="#footer"className="link">Contacts</a>
          <div className="link" onClick={showLogin}>Log In</div>
          <div className="link">Sign Up</div>
        </div>
        <div id='login-btn' onClick={showLogin}>
          Login
        </div>
      </div>

      <div>
          {navigation && 
          <>
          <div className='overlay' onClick={hideNav}></div>
          <NavModal hideNav={hideNav}/>
          </>}
        </div>
      <div>
          {login && 
          <>
          <div className='overlay' onClick={hideLogin}></div>
          <Login hideLogin={hideLogin}/>
          </>}
        </div>

    </section>
  )
}

export default Navbar