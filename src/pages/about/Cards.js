import React from 'react'
import {useState,useEffect} from 'react'

const sample  = [
{
    name: 'hajji',
    position: 'Founder',
    quote: 'lokeorkeokjaojk;lajlk;jdklsj'
},
{
    name: 'Joseph',
    position: 'FounderTwo',
    quote: 'lokeorkeokjaojk;lajlk;jdklsj'
},
{
    name: 'Poldz',
    position: 'Founder',
    quote: 'lokeorkeokjaojk;lajlk;jdklsj'
}
]
console.log(sample)
function Cards() {

  
const [tags, setTag] = useState([])
    

useEffect(()=>{

    

    setTag(sample)

},[])


  
  return (
      <>
        {/* <h1>
           {tags.map((tag)=> tag.name)}
        </h1>
      */}
      </>
   
  )
}

export default Cards