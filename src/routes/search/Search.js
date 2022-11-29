import React, { useState } from 'react'
import './Search.css'




function Search() {

const [state, setState] = useState('test')

const handleInput =(e)=> {
  setState(e.target.value)
}



  return (
    <div className='page-container'>

{/* LEFT SECTION */}
      <section className='left'>
        <div className="search-container">
          
          {/* SEARCH INPUT */}
          <input 
            type="text" 
            placeholder='search' 
            className='search-input'
            onChange={handleInput}
            />
          {/* <div className="search-filter"> */}
          {/* </div> */}
            
            {/* SEARCH FILTER  */}
            <div className='filter'>Budget</div>
            <div className='filter'>Need ASAP</div>
        </div>
        
        {/* POPULAR SERVICES */}
        <div className="popular-services">
            <div className='services'>Pet master</div>
            <div className='services'>Driving</div>
            <div className='services'>Home Repair</div>
            <div className='services'>Home Repair</div>
            <div className='services'>Home Repair</div>
          </div>
        {/* SEARCH RESULT         */}
        <div className="search-result">
          <br />
          <p style={{color: 'white'}}>search result: {state}</p>
          {/* SEARCH-CARDS */}
          <div className="search-result-cards">
            <div className='search-card'>
            </div>
            <div className='search-card'></div>
            <div className='search-card'></div>
            <div className='search-card'></div>
            <div className='search-card'></div>
            <div className='search-card'></div>
            <div className='search-card'></div>
            <div className='search-card'></div>
          </div>
        </div>
      </section>


{/* RIGHT SECTION */}
      <section className='right'>
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
    </div>
  )
}

export default Search