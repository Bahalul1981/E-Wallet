import React, { useState } from 'react'
// import Navhome from './navbar/Navhome'
import {useDispatch} from 'react-redux'
import{addcard} from "../redux/states/store/walletSlicer"
import { NavLink } from "react-router-dom";
import "../properties/Wallethome.css";


function Addcard() {

//States
const [cardnumber,setCardnumber]=useState("")
const [name,setName]=useState("")
const [valid,setValid]=useState("")
const [ccv,setCcv]=useState("")
const [type,setType]=useState("")



  
 // Function to show input value 
const whatyoutyping=(event)=>{
  setCardnumber(event.target.value)
  }

  const setname=(event)=>{
    setName(event.target.value)
    }

  const validnum=(event)=>{
    setValid(event.target.value)
   }
  const newccv=(event)=>{
    setCcv(event.target.value)
   }

  const cardtype=(event)=>{
    setType(event.target.value)
   }



 // Dispacth function to send data in store

  const dispatch= useDispatch()

  // Function for add card
  const handleAddCard = (e) => {
   
    let cardnumber = document.querySelector("#number").value;
    let name = document.querySelector("#holder").value;
    let valid = document.querySelector("#valid").value;
    let ccv = document.querySelector("#ccv").value;
    let card= document.querySelector("#card").value;

    if(cardnumber===""){
      alert("You must fill all input fild")
      e.preventDefault();
    }
    else if(name===""){
      alert("You must fill all input fild")
      e.preventDefault();
    }
    else if(valid===""){
      alert("You must fill all input fild")
      e.preventDefault();
    }
    
    else if(ccv===""){
      alert("You must fill all input fild")
      e.preventDefault();
    }
    
  else{
    dispatch(addcard({
      cardnumber,
      name,
      valid,
      ccv,
      card,
    }))};
  }

  return (
    <div>
      <div className='presentcard'>
     
            <h2>Card number</h2>
            <h3>{cardnumber}</h3>
            <h2>Card holder name</h2>
            <h3>{name}</h3>
            <h2>Valid number</h2>
            <h3>{valid}</h3>
            <h2>CCV </h2>
            <h3>{ccv}</h3> 
            <h2>Card type</h2>
            <h3>{type}</h3> 
      </div>

      <div>
        
      </div>
    
    

      <form action="*"className='formsubmit' >
            <h1>Add card</h1>
              <label htmlFor="">CARD NUMBER</label>
              <input type="number" id='number' onChange={whatyoutyping}required/> <br />

              <label htmlFor="">CARD HOLDER NAME</label>
              <input type="text" id='holder' onChange={setname}/> <br />

              <label htmlFor="">VALID THROU</label>
              <input type="number" id='valid' onChange={validnum}/> <br />

              <label htmlFor="">CCV</label>
              <input type="number" id='ccv' onChange={newccv}/> <br />

              
              <label for="card">Choose card type</label>
                <select name="card" id="card" onChange={cardtype}>
                      <option value="visa" >Visa</option>
                      <option value="master" >Master</option>
                      <option value="american" >American Express</option>
                </select>
                

              <NavLink to="/"><button className='showbtn'onClick={handleAddCard} >ADD CARD</button></NavLink>

              
  
      </form>
      
       
    </div>
  )
}

export default Addcard
