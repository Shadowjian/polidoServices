import React from 'react'

function StatementFile({founder}) {
  return (
<>
 
    <div id='phrase'>
         
           
        <div id='phraseOne'>
            <div id='containerOne'>
                
                    {founder.headTwo}
            </div>

            <div id='containerTwo'>

                    <div id='page'>
                        {founder.pageOne}
                    </div>

                    <div>
                        <img id='officeLogo' src={founder.image} />
                    </div>

            </div>
            
        </div>
    </div>
        
 </>
    
  )
}

export default StatementFile