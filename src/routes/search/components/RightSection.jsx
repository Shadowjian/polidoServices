//TODO create a new object for the seller's profile:

// 1. banner
// 2. phrase inside banner 
// 3. profile pic
// 4. reviews/testimonials
// 5. ratings

//TODO
// 6. create a function to make it a modal -- DONE!
// 7. finalize the css


import React from 'react'

function RightSection({hideSeller}) {
  return (
    <section className='right'>
      <button onClick={hideSeller}>x</button>
    <div className="profile">
      <div className='profile-banner'>
        <h3>"Need a driver?"</h3><br /><br />
        <h2>""</h2>
      </div>
      <div className='profile-picture'>
         <img src="https://media1.popsugar-assets.com/files/thumbor/8QCfbBsz_Tt7-Zavrc_q6rSrF9Q/356x1145:1857x2646/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/970/n/1922398/cc3fa7b15d70381d55bd82.88203803_/i/Brad-Pitt.jpg" alt="" />
      </div>
      <div>
        <h2 className='testi-heading'>Testimonials</h2>
      </div>
      <div className='testimonials'>
        <div className='testi'>
          <div className='profile-picture'>
            <img src="https://i.pinimg.com/736x/19/46/e2/1946e2aba2138ea6a0dc777d0f2eef0e.jpg" alt="" />
          </div>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, deleniti?</h5>
          </div>
          <div className='testi'>
          <div className='profile-picture'>
            <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/11/jennifer-anniston-1296x728-header-1296x729.jpg?w=1155&h=2268" alt="" />
          </div>
            <h5>"Been a regular customer for a year now, always satisfaction guarantee!"</h5>
          </div>
        <div>
      </div>

      </div>
    </div>
  </section>
  )
}

export default RightSection