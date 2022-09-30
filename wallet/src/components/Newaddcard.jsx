import React from 'react'
import { useSelector} from 'react-redux'
import "../properties/Wallethome.css"
import {useDispatch} from 'react-redux'
import{movecard} from "../redux/states/store/walletSlicer"




function Newaddcard() {
  // Getting data from store
    const newInfo=useSelector((state)=>state.newcardinfo.cardList)

    const dispatch= useDispatch()

 // Here sending data by tCard parameter
    const displaycard=(tCard)=>{
      dispatch(movecard(tCard)
      )
      
    }
   
    

  return (
    <div >
      
      {newInfo.map((infa,id)=>{

                return(
                  
                  <div key={id}>
                          {/* <button className='deletbtn' onClick={()=>deletiiteam(id)}>Delet</button> */}
                          <button className='deletbtn2' onClick={()=>displaycard(infa)}>Move card</button>

                          <h2>Card number</h2>
                          <p>{infa.cardnumber}</p>
                          <h2>Card holder name</h2>
                          <p>{infa.name}</p>
                          <h2>Valid number</h2>
                          <p>{infa.valid}</p>
                          <h2>CCV </h2>
                          <p>{infa.ccv}</p> 
                          <h2>Card type</h2>
                          <p>{infa.card}</p> <hr />
                          
                         
                  </div>
                  
  
                 )}

         )}
      
    </div>
  )
}

export default Newaddcard
