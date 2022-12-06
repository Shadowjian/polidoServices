import React from 'react'

function StatementFile({founder}) {
  return (
<>
    <div id='phrase'>
        <div id='containerTwo'>
            <div className='about-content'>
                <h3 id='about-header'>{founder.headTwo}</h3>
                <div id='page'>
                    {founder.pageOne}
                </div>
            </div>
            <div className='about-image'>
                <img id='officeLogo' src={founder.image} />
            </div>
        </div>
    </div>
        
 </>
    
  )
}

export default StatementFile