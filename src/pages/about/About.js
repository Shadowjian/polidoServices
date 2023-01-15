import React, { useEffect, useState } from 'react'
import './About.css'
import './Devcards.css'
import './StatementFile.js'
 
// import Cards from './Cards.js'
import CardsDevelopers from './CardsDevelopers.js'
import webDevThree from '../../assets/webDevThree.jpg'
import webDevOne from '../../assets/webDevOne.jpg'
import webDevTwo from '../../assets/webDevTwo.jpg'

 
import AboutObjects from './AboutObjects.js'

// import StatementFile from './StatementFile.js'
 

 
const foundersObject = [
  {
    image:webDevOne,
    name: 'Hajji',
    position: 'Founder | Fullstack Web Developer',
    statement: 'Motivated junior web developer looking for a role as full-stack web developer at SoftwareX. Passionate about building first-class web applications. Developed an e-commerce website for a local fashion retailer while at University X. Relevant skills include DNS Management, Database, Debugging, and more.',
    link:['https://discord.com/channels/1046398079940698152/1046398079940698157/1046410471483383878','https://twitter.com/GeeCrypto826?fbclid=IwAR3Jqq8mLA-To9TbYFh_at9u9la8TlT720iBJqsAZDI93jHXD1DjgttTb_s','https://www.instagram.com/dailygearmmxix','https://www.instagram.com/dailygearmmxix','https://mail.google.com']
  },
  {
    image: webDevTwo,
    name: 'Joseph',
    position: 'Co-Founder | Fullstack Web Developer',
    statement: 'Experienced web developer with a strong background in developing award-winning applications for a diverse clientele. 5+ years of industry experience includes programming, debugging, and wireframes. Received 80%+ experience scores on every web application built for SoftwareX.',
    link:['https://discord.com/channels/1046398079940698152/1046398079940698157/1046410471483383878','https://twitter.com/GeeCrypto826?fbclid=IwAR3Jqq8mLA-To9TbYFh_at9u9la8TlT720iBJqsAZDI93jHXD1DjgttTb_s','https://www.instagram.com/dailygearmmxix','https://www.instagram.com/dailygearmmxix','https://mail.google.com']
  },
  {
    image: webDevThree,
    name: 'Mark Leo',
    position: 'Co-Founder | Fullstack Web Developer',
    statement: 'Dedicated and efficient full stack developer with 6+ years experience in application layers, presentation layers, and databases. Certified in both F/E and B/E technologies. Spearheaded successful transition from LAMP stack to MEAN which cut latency by 40% and increased effectiveness of database  administrators by 20%.',
    link:['https://discord.com/','https://twitter.com/','https://www.instagram.com/','https://github.com/','https://mail.google.com']
  }
]



function About() {

  const [founders, setFounders] = useState([])
  useEffect(()=>{
    setFounders(foundersObject)
  },[])
  return (
    <> 
        <div id='headTitle'>
            About Polido Services
          </div>
       
      <div id='aboutBody'>

          <div id='parContOne'>
          <AboutObjects/>
          </div>
          
            {/* <h2 id='headOne'>Who We Are</h2> 
             
              <p id='p-One'>
                        Polido services are the first services marketplace in the Philippines. We are driving a shift towards a demand-based, digital economy for service businesses.
                  We are passionate about helping people to empower them to live their work by building their businesses from  the ground up and becoming financially and professionally independent.
                  We're a team of energetic, passionate, and dedicated individuals. As the First growing services marketplace, we have vast ambitions as we continue to expand across the country.
              </p>
              <img id='officeImage' src={PolidoOffice} /> */}
          
          {/* <h2 id='headTwo'>Our Goal in the community </h2>
            <p id='p-Two'>
                We are passionate about what we do, our team is proud to support thousands of Filipinos to get started off the ground.

                One of our goals is to connect clients to our community of professional individualsÂ available to hire by the hour or project; provide flexibility to work when it suits you, outside the archaic 9-to-5 day; and enable people to live their work dream.
            </p>

          <h2 id='headThree'>A PASSIONATE TEAM </h2>
            <p id='p-Three'>
                Polido services assembled a team of the best and brightest minds in the business.

                We're all dedicated to the global ambitions of our business, whilst maintaining a collaborative, passionate, and family-like approach with shared responsibility and passion for everyone using our service.
            </p>  

          <h2 id='headFour'>THE FOUNDERS</h2>
            <p id='p-Four'>
              Polido services are Founded by successful serial entrepreneurs <strong> Hajji, Mark Leo, and Joseph Gee</strong> with a vision and passion for helping Individual professionals get any job done easier and more efficiently.
            </p>
           <img src="" alt=""/> */}
 
       
        
        <div id='divCardsContainer'>
           {founders.map((founder)=>(<CardsDevelopers listFounder={founder}/>))}
        </div>
        
      </div>
   

    </>
  )
}

export default About