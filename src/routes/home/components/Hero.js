import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../assets/logo.png'
import Polidos from '../../../assets/polidos.png'



function Hero() {
  return (
      // Landing Page
    <section id="landing-container">

        <div className='landing-row'>
            
            <div className="left-landing">

              <div className="slogan">
                    <h1 className="slogan-title">Your <span>PROBLEM</span>... We <span>SOLVE</span></h1>
                    <h3>Broken pipes? Roof leaking? Need Driver?</h3>
                    <button className="hire-btn">
                      <Link className='hirebtn-txt' to="search" style={{color: 'black'}}>HIRE A PROFESSIONAL</Link>
                    </button>
              </div>

              <div className="newsletter">
                    <h3>We document every step of the way. Subscribe and get informed.</h3>

                    <div className="email-form">
                        <input className="email-input" type="text" placeholder="Enter your Email" />
                        <a href='#'>
                        <button className="subs-btn">SUBSCRIBE</button>
                        </a>
                    </div>
              </div>

            </div>

            <div className="right-landing">
                    <div className="flex-workers">
                      <img src={Polidos} alt="" />
                    </div>
            </div>

        </div>

        
    </section>
  )
}

export default Hero