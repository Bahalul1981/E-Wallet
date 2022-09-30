import React from 'react'
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>

      <NavLink to="/addcard"><h4><button className='showbtn'>Add new card</button></h4></NavLink>
        
      
    </div>
  )
}

export default Navbar
