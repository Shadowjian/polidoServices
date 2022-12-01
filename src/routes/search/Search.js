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

  useEffect(()=>{
    setSellers(Sellers)
  },[])

  console.log(searchInput)

  const searchSellers =(e)=> {
      setSearchInput(e.target.value)
      setSellers(Sellers.filter((seller, i)=>{
        return seller.skills.includes(searchInput.toLowerCase())
      }))
  }
  console.log(sellers)
  return (
    <div className='page-container'>
      <div className='left'>
        <SearchSection searchFn={searchSellers} searchInput={searchInput}/>
        <LeftSection result={searchInput} sellers={sellers}/>
      </div>
      <RightSection />
    </div>
  )
}

export default Search