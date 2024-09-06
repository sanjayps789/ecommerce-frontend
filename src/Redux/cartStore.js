import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import wishlistSlice from "./Slices/wishlistSlice";
import cartSlice from "./Slices/cartSlice";

const cartStore = configureStore({
   reducer:{
    userReducer:userSlice,
    wishlistReducer:wishlistSlice,
    cartReducer:cartSlice
   },
   devTools:true
})

export default cartStore