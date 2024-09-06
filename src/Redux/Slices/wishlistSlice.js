import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlists",
    initialState: {
        wishlistData: []
    },
    reducers: {
        addToWishlistItem: (state, action) => {
            // Replace the current wishlist data with the new data
            state.wishlistData = action.payload;
        },
        removeFromWishlist: (state, action) => {
            // Filter out the item by its _id
            state.wishlistData = state.wishlistData.filter((item) => item._id !== action.payload);
        }
    }
})

export const { addToWishlistItem, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
