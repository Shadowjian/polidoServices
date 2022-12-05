import React, { useState, useEffect } from 'react'
import './Search.css'
import RightSection from './components/RightSection'
import LeftSection from './components/LeftSection'
import SearchSection from './components/SearchSection'
import Sellers from './components/Sellers'


// PAGE LAYOUT

function Search() {
  const [sellers, setSellers] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [sellerProfile, setSellerProfile] = useState(false)
  const [sellerData, setSellerData] = useState({})
  // const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    !searchInput && setSellers(Sellers)
    console.log('render')
  },[searchInput])

  // console.log(searchInput)

  const searchSellers =(e)=> {
      setSearchInput(e.target.value)
      setSellers(Sellers.filter((seller)=>{
        // chaining some and includes method to filter array
        return seller.skills.some((element)=>element.includes(searchInput.toLowerCase()))
      }))
  }

  const showSeller = (e) => {
    setSellerProfile(true)
    // console.log(sellers)
    const index = (e.target.getAttribute('id').split(','))
    // console.log(index)
    setSellerData((sellers[index.splice(-1)]))
    console.log(sellerData)
  }
  const hideSeller = () => {
    setSellerProfile(false)
  }

  // console.log(sellers)
  return (
    <div className='page-container'>
      <div className='left'>
        <SearchSection searchFn={searchSellers} searchInput={searchInput}/>
        <LeftSection sellers={sellers} showSeller = {showSeller} searchInput={searchInput}/>
      </div>
      {sellerProfile &&
          <>
            <div className='overlay' onClick={hideSeller}></div> 
            <RightSection hideSeller = {hideSeller} sellerData={sellerData}/>
          </> 
      }
    </div>
  )
}

export default Search