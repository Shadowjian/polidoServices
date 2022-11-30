import React from 'react'
import Logo from '../../../assets/logo.png'
import Polidos from '../../../assets/polidos.png'
import Laundry from '../../../assets/laundry.jpg'
import Home from '../../../assets/home.jpg'
import Repair from '../../../assets/repair.jpg'
import Transport from '../../../assets/transport.jpg'
import Review from '../../../assets/review.png'
import Compare from '../../../assets/compare.png'

function Hero() {
  return (
      // Landing Page
    <section id="landing-container">

          <div className="landing1">

              <div className="flex-logo">
                <img src={Logo} alt="" />
              </div>
              <div className="flex-slogan">
                  <h1 className="slogan-title">Your <span>PROBLEM</span>... We <span>SOLVE</span></h1>
                  <h3>Broken pipes? Roof leaking? Need Driver?</h3>
                  <a href='#'>
                  <button className="hire-btn">Hire a Proffesional</button>
                  </a>
              </div>
          </div>

          <div className="landing2">
              <div className="flex-newsletter">
                  <h3>We document every step of the way. Subscribe and get informed.</h3>

                  <div className="email-form">
                      <input className="email-input" type="text" placeholder="Enter your Email" />
                      <a href='#'>
                      <button className="subs-btn">SUBSCRIBE</button>
                      </a>
                  </div>
              </div>

              <div className="flex-workers">
                <img src={Polidos} alt="" />
              </div>
          </div>

          {/* // Services  */}

          <div className="svc-container">

              <div className="svc-header">
                  <h1 className="svc-title">Discover Services We Offer</h1>
                  <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat minus maiores nihil repudiandae ad inventore, alias enim praesentium. Soluta, ullam ipsa? Doloremque aspernatur similique adipisci. Quod neque at repellat nihil.</p>
              </div>

              <div className="svc-cards">
                  <div className="card-row">

                      <div className="card">
                        <img src={Laundry} alt="" />
                          <div className="card-body">
                            <h5 className="card-title">Laundry Services</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href='#'>
                            <button className="btn">View Details</button>
                            </a>
                          </div>
                      </div>

                      <div className="card">
                        <img src={Home} alt="" />
                          <div className="card-body">
                            <h5 className="card-title">Home Maintainance</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href='#'>
                            <button className="btn">View Details</button>
                            </a>
                          </div>
                      </div>

                      <div className="card">
                        <img src={Repair} alt="" />
                          <div className="card-body">
                            <h5 className="card-title">Repair Services</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href='#'>
                            <button className="btn">View Details</button>
                            </a>
                          </div>
                      </div>

                      <div className="card">
                        <img src={Transport} alt="" />
                          <div className="card-body">
                            <h5 className="card-title">Transport Services</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href='#'>
                            <button className="btn">View Details</button>
                            </a>
                          </div>
                      </div>

                  </div>
              </div>

          </div>

          {/* Services End */}

          {/* HOW IT WORKS [hiw]*/}

          <div className="hiw">
            <h1 className="hiw-title">How It Works</h1>
          </div>
        
          <div className='step-container1'>
              <div className="step-row">
                  <div className='img-box1'></div>
                  <div className="step-box">
                    <h2 className="step-num">STEP 01</h2>
                    <h3 className="step-title">Tell us what you need</h3>
                    <p className="step-info">Whatever the service you're looking for, we'll help you find the best professional for the job.</p>
                  </div>  
              </div>
          </div>

          <div className='step-container2'>
              <div className="step-row">
                  <div className="step-box2">
                    <h2 className="step-num">STEP 02</h2>
                    <h3 className="step-title">Let us do the Legwork</h3>
                    <p className="step-info">We’ll search thousands of professionals to find the best ones for what you need.</p>
                  </div>  
                  <div className='img-box2'></div>
              </div>
          </div>
                  
          <div className='step-container3'>
              <div className="step-row">
                  <div className='img-box3'>
                      <img className='box3-image' src={Compare} alt="" />
                  </div>
                  <div className="step-box3">
                    <h2 className="step-num">STEP 03</h2>
                    <h3 className="step-title">Compare and Pick the Best</h3>
                    <p className="step-info">Check out their profiles, reviews and portfolio to help you make a decision. From the  Selection, pick the best professional for what you need.</p>
                  </div>  
              </div>
          </div>

          <div className='step-container4'>
              <div className="step-row">
                  <div className="step-box4">
                    <h2 className="step-num">STEP 04</h2>
                    <h3 className="step-title">Leave a Review</h3>
                    <p className="step-info">After they’ve done the work, please make sure to leave a review on Polido Services, to help fellow customers find the best professionals.</p>
                  </div>  
                  <div className='img-box4'>
                      <img className='box4-image' src={Review} alt="" />
                  </div>
              </div>
          </div>

        {/* HOW IT WORKS [hiw] END*/}
        {/* Search Form */}

          <div className='search-container'>
              <h1 className='search-h1' >Ready to Find a Proffesional?</h1>
              <h3 className='search-h2'>Now you know how it works, start looking for a proffesional.</h3>

              <div className="search-form">
                      <input className="search-input" type="text" placeholder="What services are you looking for?" />
                      <a href='#'>
                      <button className="search-btn">SEARCH</button>
                      </a>
              </div>
          </div>
          

    </section>
  )
}

export default Hero