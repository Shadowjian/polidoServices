import React from 'react'


function Hero() {
  return (
      // Landing Page
    <section id="landing-container">

          <div class="landing1">

              <div class="flex-logo">
                <img src="#" alt="" />
              </div>
              <div class="flex-slogan">
                  <h1 class="slogan-title">Your <span>PROBLEM</span>... We <span>SOLVE</span></h1>
                  <h3>Broken pipes? Roof leaking? Need Driver?</h3>
                  <button type="button" class="hire-btn" href="#">
                      Hire a Proffesional
                  </button>
              </div>
          </div>

          <div class="landing2">
              <div class="flex-newsletter">
                  <h3>We document every step of the way. Subscribe and get informed.</h3>

                  <div class="email-form">
                      <input class="email-input" size="20" type="text" placeholder="Enter your Email" />
                      <button class="subs-btn" type="button" href="#">SUBSCRIBE</button>
                  </div>
              </div>

              <div class="flex-workers">
                  <img src="#" alt="" />
              </div>
          </div>

          {/* // Services  */}

          <div class="svc-container">

              <div class="svc-header">
                  <h1 class="svc-title">Discover Services We Offer</h1>
                  <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat minus maiores nihil repudiandae ad inventore, alias enim praesentium. Soluta, ullam ipsa? Doloremque aspernatur similique adipisci. Quod neque at repellat nihil.</p>
              </div>

              <div class="svc-cards">
                  <div class="card-row">

                      <div class="card">
                          <img src="#" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Gardening</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button href="#" class="btn">View Details</button>
                          </div>
                      </div>

                      <div class="card">
                          <img src="#" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Gardening</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button href="#" class="btn">View Details</button>
                          </div>
                      </div>

                      <div class="card">
                          <img src="#" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Gardening</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button href="#" class="btn">View Details</button>
                          </div>
                      </div>

                      <div class="card">
                          <img src="#" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Gardening</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button href="#" class="btn">View Details</button>
                          </div>
                      </div>

                  </div>
              </div>

          </div>

          {/* Services End */}

          {/* HOW IT WORKS [hiw]*/}

          <div class="hiw">
            <h1 class="hiw-title">How It Works</h1>
          </div>
        
            <div class="hiw-container">

                <div class="steps-img">
                  <h1>IMAGE HERE</h1>
                </div>
                  
                <div class="steps">

                  <div class="steps-box">
                      <h2 class="step-num">STEP 01</h2>
                      <h3 class="steps-title">Card One</h3>
                      <p class="steps-dscrptn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                  </div>
                  <div class="steps-box">
                      <h2 class="step-num">STEP 01</h2>
                      <h3 class="steps-title">Card One</h3>
                      <p class="steps-dscrptn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                  </div>
                  <div class="steps-box">
                      <h2 class="step-num">STEP 01</h2>
                      <h3 class="steps-title">Card One</h3>
                      <p class="steps-dscrptn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                  </div>
                  <div class="steps-box">
                      <h2 class="step-num">STEP 01</h2>
                      <h3 class="steps-title">Card One</h3>
                      <p class="steps-dscrptn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                  </div>
                  <div class="steps-box">
                      <h2 class="step-num">STEP 01</h2>
                      <h3 class="steps-title">Card One</h3>
                      <p class="steps-dscrptn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                  </div>

                </div>

            </div>

        </section>
  )
}

export default Hero