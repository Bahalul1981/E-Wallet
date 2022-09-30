import React, { useState } from 'react'
import Navbar from './navbar/Navbar'
import "../properties/Wallethome.css"
import Newaddcard from './Newaddcard'
import backimg from "./image/deshibank.jpg"
import { useSelector} from 'react-redux'


function Walethome() {

  //Getting data from store

const defultvalue = useSelector((state)=>state.newcardinfo.defaultCard)


const[shocard,setShowcard]=useState(false)


  return (
    
 
    <div > 
    <img src={backimg} alt="" className='maindivimage'/>
     

        <div className='seconddiv'>


         
              <div> 
                      <h2>Card number</h2>
                      <p>{defultvalue.cardnumber}</p>
                      <h2>Card holder name</h2>
                      <p>{defultvalue.name}</p>
                      <h2>Valid number</h2>
                      <p>{defultvalue.valid}</p>
                      <h2>CCV </h2>
                      <p>{defultvalue.ccv}</p> 
                      <h2>Card type</h2>
                      <p>{defultvalue.card}</p>
                      
                      
                    
                  </div>
          
            </div>

            
        <h2 className='displaycard'>{shocard===false ? "Click the button below to view the new card": "Click the button below if you want to hide your new card"}</h2>

        <button onClick={()=>setShowcard(!shocard)} className='showbtn' >{shocard===true ? "Hide card" : "Show card"}</button> 
       

              { shocard &&
                <div className='newaddedcard'>

                     
                     <Newaddcard />
              </div>}
              
        <Navbar />
        </div>
      
   
  
  )
}

export default Walethome
