import React from 'react'


function Hero() {
  return (
    <section id="landing-container">

          <div class="landing1">

              <div class="flex-logo">
                <img src="#" alt="" />
              </div>
              <div class="flex-slogan">
                  <h1 class="slogan-title">Your <span>PROBLEM</span>... We <span>SOLVE</span></h1>
                  <h5>Broken pipes? Roof leaking? Need Driver?</h5>
                  <button type="button" class="btn" href="#">
                      Hire a Proffesional
                  </button>
              </div>
          </div>

          <div class="landing2">
              <div class="flex-newsletter">
                  <h5>We document every step of the way. Subscribe and get informed.</h5>

                  <div class="input-group mb-3 email-form">
                      <input type="text" placeholder="Enter your Email" />
                      <button class="btn" type="button" id="button-addon2" href="#">SUBSCRIBE</button>
                  </div>
              </div>

              <div class="flex-workers">
                  <img src="#" alt="" />
              </div>
          </div>
        </section>
  )
}

export default Hero