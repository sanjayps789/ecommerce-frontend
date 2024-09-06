import SERVER_URL from "./baseUrl"
import { commonAPI } from "./commonAPI"

// register api
export const registerAPI = async(user) =>{
return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}

// Login api
export const loginAPI = async(user) =>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}

export const googleSignInAPI = async(reqBody) =>{
    return await commonAPI("POST",`${SERVER_URL}/google-login`,reqBody,"")
}

export const getAllProductsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/get-all-products`,"",reqHeader)
}

export const getProductById = async(pid,reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/get-product-byId/${pid}`,"",reqHeader)
}

export const getAllCategories = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/get-all-categories`,"",reqHeader)
}

export const addToWishlistAPI = async(reqBody,reqHeader) =>{
    return await commonAPI("POST",`${SERVER_URL}/add-to-wishlist`,reqBody,reqHeader)
}

export const getWishlistProductsAPI = async(reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/get-wishlist-products`,"",reqHeader)
}

export const removeItemFromWishlistAPI = async(pid,reqHeader) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/remove-from-wishlist/${pid}`,"",reqHeader)
}

export const addToCartAPI = async(reqBody,reqHeader) =>{
    return await commonAPI("POST",`${SERVER_URL}/add-to-cart`,reqBody,reqHeader)
}

export const getCartProductsAPI = async(reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/get-cart-products`,"",reqHeader)
}

export const removeItemFromCartAPI = async(pid,reqHeader) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/remove-item-from-cart/${pid}`,"",reqHeader)
}

export const incrementQuantityAPI = async(reqBody,reqHeader) =>{
    return await commonAPI("POST",`${SERVER_URL}/increment-quantity`,reqBody,reqHeader)
}

export const decrementQuantityAPI = async(reqBody,reqHeader) =>{
    return await commonAPI("POST",`${SERVER_URL}/decrement-quantity`,reqBody,reqHeader)
}


export const addDeliveryAddressAPI = async(reqBody,reqHeader) =>{
    return await commonAPI("POST",`${SERVER_URL}/add-delivery-address`,reqBody,reqHeader)
}
