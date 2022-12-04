// TODO: Finalize the navbar design 
// TODO: Create the mobile version using modal 

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import profilePic from '../assets/svg/profilePic.svg'


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

function Login({hideLogin, showSignUp, logIn}) {
  return (
      <form id='login-modal'>
        <i className="fa-solid fa-x close-btn" onClick={hideLogin}></i>
        <div className="join-modal">
          <h3 className="join-heading">Polido Services</h3>
          <div className="btnl btn-fb">Continue with Facebook</div>
          <div  className="btnl btn-google">Continue with Google</div>
          <div className="or"> OR </div>
          <div className="input">
            Email
              <input required type="email" name="email" id="email" placeholder="Please enter your email" />
          </div>
          <div className="input">
            Passwod
              <input required type="password" name="email" id="password" placeholder="Please enter your password" />
          </div>
          <div className='forgot-password'>
            Forgot Password
          </div>
          <div typeof='button' className="btnl login-continue" onClick={logIn}>Continue</div>
          <div className="login-member">
            New to Pollido Services? <span className="ismember" onClick={showSignUp}>Sign Up</span>
          </div>
      </div>
    </form>
  )
}

function SignUp({hideSignUp, logIn}) {
  return (
      <form action="" id='login-modal'>
        <i className="fa-solid fa-x close-btn" onClick={hideSignUp}></i>
        <div className="join-modal">
          <h3 className="join-heading">Join Polido Services</h3>
          <div className="btnl btn-fb">Sign Up with Facebook</div>
          <div  className="btnl btn-google">Sign Up with Google</div>
          <div className="or"> OR </div>
          <div className="input">
            Email
              <input type="email" name="email" id="email" placeholder="Please enter your email" />
          </div>
          <div className="input">
            Password
              <input type="password" name="email" id="password" placeholder="Minimum 6 characters with a number and a letter" />
          </div>
          
          <div  className="btnl login-continue" onClick={logIn}>Continue</div>
          <div className="login-member">
            Already a member? <span className="ismember" onClick={hideSignUp}>Sign in</span>
          </div>
      </div>
    </form>
  )
}


function ProfileDropDown({logOut}) {
  return (
    <div className='profile-drop-down'>
        <div>Settings</div>
        <div onClick = {logOut}>Logout</div>
    </div>
  )
}

function Navbar() {
const [navigation, setNavigation] = useState(false)
const [login, setLogin] = useState(false)
const [loggedIn, setLoggedIn] = useState(false)
const [signUp, setSignUp] = useState(false)
const [profileToggle, setProfileToggle] = useState(false)

const logOut=()=>{
  setLoggedIn(false)
  setProfileToggle(false)
}

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

const hideSignUp = () => {
  setSignUp(false)
  setLogin(true)
}

const showSignUp = () => {
  setSignUp(true)
  setLogin(false)
}

const logIn = () =>{
  setLoggedIn(true)
  setSignUp(false)
  setLogin(false)
}

const toggleProfile = ()=> {
  !profileToggle ? setProfileToggle(true) : setProfileToggle(false)
  console.log(profileToggle)
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
          <Link className="link" to="search">Search</Link>
          
          {loggedIn? <div className="link profile-btn" onClick={toggleProfile}>
            <img src={profilePic} alt="" />
          </div> :
          <div className="link" onClick={showLogin}>Login</div>}
          
        </div>

        {loggedIn? <div className='login-btn profile-btn' onClick={toggleProfile}>
          <img src={profilePic} alt="" />
        </div> : 
        <div className='login-btn' onClick={showLogin}>
          Login
        </div>
        }

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
          <Login hideLogin={hideLogin} showSignUp={showSignUp} logIn={logIn}/>
          </>}
        </div>
      <div>
          {signUp && 
          <>
          <div className='overlay' onClick={hideSignUp}></div>
          <SignUp hideSignUp={hideSignUp} logIn={logIn}/>
          </>}
        </div>
      <div>
          {profileToggle && <ProfileDropDown logOut={logOut}/>}
        </div>

    </section>
  )
}

export default Navbar