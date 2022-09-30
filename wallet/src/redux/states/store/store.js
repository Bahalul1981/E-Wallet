import { configureStore } from '@reduxjs/toolkit'
import addWallet from "./walletSlicer"

export default configureStore({
  reducer: {

    newcardinfo: addWallet

  },
})