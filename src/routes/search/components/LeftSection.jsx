import React from 'react'

const php = "\u20B1"

function SearchCard ({fn, seller}) {
    return (
      <div className='search-card' onClick={fn}>
          <div className='card-banner'>
            <img src={seller.banner} alt="" />
          </div>
          <div className='card-body'>
            <div className='seller-wrapper'>
              <div className='seller-pic'>
                <img src={seller.photo} alt="" />
              </div>
              <div className='seller-info'>
                <div className='seller-name'>{seller.name}</div>
                <div className='seller-level'>Level {seller.level}</div>
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

const handleClick=()=>{
  alert('result card')
}
  
function LeftSection({result, sellers}) {

    return (
        <div className="search-result">
            <p style={{color: 'white'}}>search result: {result}</p>

            {/* SEARCH-CARDS */}
            <div className="search-result-cards">
                {sellers.map((seller, id)=> (<SearchCard key={id} seller={seller} fn={handleClick}/>))}
            </div>
        </div>
    )
}

export default LeftSection