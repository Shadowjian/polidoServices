import React, { useState } from 'react'
import './Search.css'
import RightSection from './components/RightSection'
import LeftSection from './components/LeftSection'
import SearchSection from './components/SearchSection'


// PAGE LAYOUT

function Search() {
  const [state, setState] = useState('test')

  const handleInput =(e)=> {
      setState(e.target.value)
      }
      
  return (
    <div className='page-container'>
      <div className='left'>
        <SearchSection fn={handleInput}/>
        <LeftSection result={state}/>
      </div>
      <RightSection />
    </div>
  )
}

export default Search