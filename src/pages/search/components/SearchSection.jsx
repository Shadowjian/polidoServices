import React from 'react'

function SearchSection({searchFn, searchInput}) {
        
    return (
        <div className="search-page-container">
            <div className='search-glass'>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            {/* SEARCH INPUT */}
            <input 
                value={searchInput}
                onChange={searchFn}
                placeholder='Search for: "plumber, driver, house keeper, etc"'
                className='search-page-input'
                />
            {/* SEARCH FILTER  */}
            {/* <div className='filter'>Budget</div> */}
            {/* <div className='filter'>Need ASAP</div> */}
        </div>
    )
}
export default SearchSection