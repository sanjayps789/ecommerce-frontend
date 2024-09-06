import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCartAPI, addToWishlistAPI, getProductById } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlistItem } from '../Redux/Slices/wishlistSlice';

function View() {
  const wishlist = useSelector(state=>state.wishlistReducer)
  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [product,setProduct] = useState({})
  const handleProductById = async(id) =>{
    const token = localStorage.getItem("token")
    try {
      if(!token){
        navigate('/')
      }else{
        const reqHeader = {
          'authorization': `Bearer ${token}`
        }
        const result = await getProductById(id,reqHeader)
        console.log(result);
        if(result.status==200){
          setProduct(result.data)
        }else{
          toast.error(result.response.data)
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddtoWishlist = async(productId) =>{
    const token = localStorage.getItem("token")
    if(!token){
      navigate('/')
    }else{
      try {
        const reqHeader = {
          'authorization': `Bearer ${token}`
        }
        const result = await addToWishlistAPI(productId,reqHeader)
        console.log(result);
        if(result.status==200){
          toast.success(result.data.message)
          dispatch(addToWishlistItem(result.data.product._id))
        }else{
          toast.error(result.response.data)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  const handleAddToCart = async(pid) =>{
    const token = localStorage.getItem("token")
    if(!token){
      navigate('/')
    }else{
      try {
        const reqHeader = {
          'authorization': `Bearer ${token}`
        }
        const result = await addToCartAPI(pid,reqHeader)
        console.log(result);
        if(result.status==200){
          toast.success(result.data.message)

        }else{
          toast.error(result.response.data.message)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  useEffect(()=>{
    handleProductById(id)
  },[])
  return (
    <div className='w-100 vh-100 d-flex align-items-center justify-content-center'>
      <div className="container">
      { product?
      <div className="row d-flex align-items-center">
        <div className="col-lg-4 col-md-7">
            <img src={product?.thumbnail}  className='img-fluid w-100' alt={product?.title} />
          </div>
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-7 col-md-4 col-">
            <h1 className='text-black fw-bold'>{product?.title}</h1>
            <h4>${product?.price}</h4>
            <p style={{textAlign:'justify'}} className='py-3'>{product?.description}</p>

            <button onClick={()=>handleAddtoWishlist({productId:product?._id})} className='fw-medium btn btn-outline-dark btn-block me-4' to={'/wishlist'} style={{ textDecoration: 'none', color: 'black' }}> <i className="fa-solid fa-heart text-danger"></i>Add to Wishlist</button>

           <button onClick={()=>handleAddToCart({productId:product?._id})}  className='fw-medium btn btn-outline-dark btn-block' to={'/wishlist'} style={{ textDecoration: 'none', color: 'black' }}> <i className="fa-solid fa-cart-plus text-success pe-2"></i>Add to Cart</button>
            
          </div>
        </div>:<Loader/>}
      </div>
      <ToastContainer autoClose={2000} theme='dark'/>
    </div>
  )
}

export default View