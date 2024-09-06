import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "carts",
    initialState: {
        cartData: []
    },
    reducers: {
        addToCart: (state, action) => {
            // Replace the current cart data with the new data
            state.cartData = action.payload;
        },
        removeFromCart: (state, action) => {
            // Filter out the item by its _id
            state.cartData = state.cartData.filter((item) => item._id !== action.payload);
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;