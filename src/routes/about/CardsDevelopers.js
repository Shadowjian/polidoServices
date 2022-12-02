import React, { useEffect, useState } from 'react'

function CardsDevelopers({listFounder}) {
    return (
    <>
        
      <li className='devCards'>
  
        <div>
          <img id='devImage' src={listFounder.image}/>
        </div>
            
        <div id='devInfo'>
          <div>
            <h2>
              <a target='_blank'>{listFounder.name}</a>
            </h2>
            <h4>
              {listFounder.position}
            </h4>
          </div>
          <h5> 
            {listFounder.statement}
          </h5>
        <div id='iconsContainer'>
          <li id='iconsLink'>
            <a target='_blank' href={listFounder.link[0]}>
              <i className="fa-brands fa-discord fa-2x"></i>
            </a>
          </li>
          <li id='iconsLink'>
            <a target='_blank' href={listFounder.link[1]}>
              <i className="fa-brands fa-twitter fa-2x"></i>
            </a>
          </li>
          <li id='iconsLink'>
            <a target='_blank' href={listFounder.link[2]}>
              <i className="fa-brands fa-square-instagram fa-2x"></i>
            </a>
          </li>
          <li id='iconsLink'>
            <a target='_blank' href={listFounder.link[3]}>
              <i className="fa-brands fa-github fa-2x"></i>
            </a>
          </li>
  
          <li id='iconsLink'>
            <a target='_blank' href={listFounder.link[4]}>
              <i className="fa-solid fa-envelope fa-2x"></i>
            </a>
          </li>
        </div>
      </div>
    </li>
    </>
    )
  }

  export default CardsDevelopers