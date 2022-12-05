import React from 'react'

const php = "\u20B1"

function SearchCard ({showSeller, seller, index}) {
  return (
    <div className='search-card'>
        <div className='card-layer' onClick={showSeller} id={index}></div>
            <div className='card-banner'>
              <img src={seller.banner} alt="" />
            </div>
            <div className='search-card-body'>
              <div className='seller-wrapper'>
                <div className='seller-pic'>
                  <img src={seller.photo} alt="" />
                </div>
                <div className='seller-info'>
                  <div className='seller-name'>{seller.name}</div>
                  <div className='seller-level'>Level {seller.level} <span className='expertise'>{seller.skills[0]}</span></div>
                </div>
            
              </div>
              <div className='seller-phrase'>
                "{seller.phrase}"
              </div>
              <div className='rating-wrapper'>
                <span className='rating'>{seller.rating}</span> <i className="fa-solid fa-star rating-star"></i><span className='review-count'> ({seller.reviews})</span>
              </div>
              <div className='rate-per-hour'>
                <div>Service Rate: <span className='service-rate'>{php}{seller.ratePerHour} per hour</span></div>
              </div>
          </div>
      </div>
  )
}

  
  function LeftSection({sellers, showSeller, searchInput }) {
  let index = []

    return (
        <div className="search-result">
          {searchInput &&
            <>
              {sellers.length > 0 ? 
              <p className="search-result-text" style={{marginBottom:"20px"}}>Results for "{searchInput.toUpperCase()}": There are {sellers.length} available services.</p> : <p className="search-result-text" style={{marginBottom: '20px'}}>We don't have "{searchInput.toUpperCase()}" service available at the moment.</p>
              }
            </>
          }
            {/* SEARCH-CARDS */}
            <div className="search-result-cards">
                {sellers.map((seller, id)=> {
                  index = [...index, id]
                  return <SearchCard key = {id} seller={seller} index = {index} showSeller={showSeller}/>})}
                  
            </div>
        </div>
    )
}



export default LeftSection