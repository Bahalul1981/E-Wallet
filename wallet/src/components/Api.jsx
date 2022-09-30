import React from 'react'
import{useEffect} from 'react'

function Api() {
   useEffect(()=>{
      const fetchdata = async()=>{
         const res = await fetch("https://randomuser.me/api/")
         const data= res.json()
         console.log(data)

       }
   })

    
  return (
      
    <div>
      {

      }
    </div>
  )
}

export default Api
