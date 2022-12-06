import React from 'react'

function Find() {
    return (
        <>
            <div className='search-container'>
              <h1 className='search-h1' >Ready to Find a Proffesional?</h1>
              <h3 className='search-h2'>Now you know how it works, start looking for a proffesional.</h3>

              <div className="search-form">
                      <input className="search-input" type="text" placeholder="What services are you looking for?" />
                      <a href='#'>
                      <button className="search-btn">Search</button>
                      </a>
              </div>
          </div>
        </>
    )
    
}

export default Find