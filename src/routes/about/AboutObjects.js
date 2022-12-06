import React, { useEffect, useState } from 'react'
import StatementFile from'./StatementFile.js'
import './StatementFiles.css'
import polidoOffice from '../../assets/polidoOffice.jpg'
import polidoGoal from '../../assets/polidoGoal.png'
import polidoEmp from '../../assets/polidoEmp.jpg'


const foundersObject = [
  
  
  {
    headTwo: 'Who We Are',
    pageOne: "Polido services are   the first  services marketplace in the Philippines. We are driving a shift towards a demand-based, digital economy for service businesses. We are passionate about helping people to empower them to live their work by building their businesses from  the ground up and becoming financially and professionally independent. We're a team of energetic, passionate, and dedicated individuals. As the First growing services marketplace, we have vast ambitions as we continue to expand across the country.",
    image: polidoOffice,
  },
  {
    headTwo: 'Our goal in the community',
    pageOne:  "We are passionate about what we do, our team is proud to support thousands of Filipinos to get started off the ground. One of our goals is to connect clients to our community of professional individualsÂ available to hire by the hour or project; provide flexibility to work when it suits you, outside the archaic 9-to-5 day; and enable people to live their work dream.",
    image: polidoGoal,
  },
  {
    headTwo: 'A Passionate Team ',
    pageOne:  "Polido services assembled a team of the best and brightest minds in the business. We're all dedicated to the global ambitions of our business, whilst maintaining a collaborative, passionate, and family-like approach with shared responsibility and passion for everyone using our service.",
    image: polidoEmp,
  },
  {
    headTwo: 'The Founders',
    pageOne:  "Polido services are Founded by successful serial entrepreneurs   Hajji, Mark Leo, and Joseph Gee with a vision and passion for helping Individual professionals get any job done easier and more efficiently.",
   
  },
   
    
]
 
function AboutObjects() {

    const [founders, setFounders] = useState([])
    useEffect (()=>{
      setFounders(foundersObject)
    },[])
  return (
    <>

    <div id='divStatement'>
    
      {founders.map((founder)=>(<StatementFile founder={founder}/>))}

    </div>
    </>
  )
}

export default AboutObjects