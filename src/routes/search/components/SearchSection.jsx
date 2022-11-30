import React from 'react'

function SearchSection({fn}) {
        
    return (
        <div className="search-container">
            {/* SEARCH INPUT */}
            <input 
                type="text" 
                placeholder='Search for: "plumber, driver, house keeper, etc"'
                className='search-page-input'
                onChange={fn}
                />
            {/* SEARCH FILTER  */}
            {/* <div className='filter'>Budget</div> */}
            {/* <div className='filter'>Need ASAP</div> */}
        </div>
    )
}
export default SearchSection