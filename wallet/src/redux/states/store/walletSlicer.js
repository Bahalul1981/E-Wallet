import { createSlice } from '@reduxjs/toolkit'


export const walletSlice = createSlice({
  
  // I CREATED ACTION HERE
  name: 'walet',

  initialState: {
    cardList: [{
          cardnumber:"",
          name:"",
          valid:"",
          ccv:"",
          card:""
         
         }],

    defaultCard:{
      cardnumber: 1232344344324,
      name:"Alvin Dawn",
      valid:118,
      ccv:234,
      card:"Master",
     
    },
  },

  reducers: {
    addcard: (state, action) => {
      if(state.cardList.length<4){
        state.cardList.push(action.payload) 
        alert("Your card has been added")
      }
      else{
        alert("You have been added four cards alrady.You cannot add more card")
       
      }
     
    },
   
    movecard:(state,action)=>{
      alert("Your card to main page.Please check.")
      state.defaultCard=action.payload
    },


    deletiteam: (state, action) => {
      state.cardList.splice(action.payload)
    },
  },
})


export const { addcard, deletiteam,movecard} = walletSlice.actions

export default walletSlice.reducer