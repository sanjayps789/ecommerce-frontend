import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {  addToCartAPI, getWishlistProductsAPI, removeItemFromWishlistAPI } from '../services/allAPI'
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlistItem } from '../Redux/Slices/wishlistSlice';

function Wishlist() {
  const wishlist = useSelector(state=>state.wishlistReducer)
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleGetData = async () => {
    const token = localStorage.getItem("token")
    if (!token) {
      navigate('/')
    } else {
      try {
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }
        const result = await getWishlistProductsAPI(reqHeader)
        if (result.status == 200) {
          setData(result.data);
          // add the product ids only to the store
          dispatch(addToWishlistItem(result.data.map(item => item._id)))
        } else {
          console.log(result.response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

 const handleRemoveFromWishlist = async(id)=>{
  console.log(id);
  const token = localStorage.getItem("token")
  if(!token){
    navigate('/')
 }else{
  try {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await removeItemFromWishlistAPI(id,reqHeader)
    console.log(result);
    if(result.status==200){
      toast.success(result.data.message)
      handleGetData()
    }else{
      toast.error(result.response.data)
    }
  
  } catch (error) {
    console.log(error);
  }
 }
}

const handleAddToCart = async(pid,id)=>{
  const token = localStorage.getItem("token")
  if(!token){
    navigate('/')
  }else{
    try {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await addToCartAPI(pid,reqHeader)
      console.log(result);
      if(result.status===200){
        toast.success(result.data.message)
        handleRemoveFromWishlist(id)
      }else{
        toast.error(result.response.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  }
}

  useEffect(() => {
    handleGetData()
  }, [])
  console.log(data);

  return (
    <div style={{paddingTop:'180px'}} className='container w-100'>
      <div className="row">
        {data?.length>0?
        data?.map((item,index)=>(
          <div key={index} className="col-lg-3 col-md-4 mb-4">
          <Card className="shadow" style={{ width: '18rem' }}>
            <Card.Img src={item?.productId?.thumbnail}  style={{ height: '200px' }} className='img-fluid  w-100' variant="top" />
            <Card.Body>
              <Card.Title>{item?.productId?.title.slice(0,20)}...</Card.Title>
              <div className='d-flex align-items-center justify-content-between pt-3'>
                <button onClick={()=>handleRemoveFromWishlist(item?._id)} className='btn d-block' variant="light">
                  <i className="fa-solid fa-heart-circle-minus fs-3 text-danger"></i>
                </button>
                <button onClick={()=>handleAddToCart({productId:item?.productId?._id},item?._id)}  className='btn d-block' variant="light">
                <i className="fa-solid fa-cart-plus fs-3 text-success"></i>
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
         )): <div style={{height:'50vh'}} className='d-flex justify-content-center align-items-center w-100 
         '>
         <img className='img-fluid' src="https://i.postimg.cc/cHycxJXz/images.png" alt="" />
         <h2 className='text-black'>Your Wishlist is empty!</h2>
       </div>
          }
      </div>
      <ToastContainer autoClose={2000} theme='dark' />
    </div>
  )
}

export default Wishlist