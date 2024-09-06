import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { decrementQuantityAPI, getCartProductsAPI,  incrementQuantityAPI,  removeItemFromCartAPI } from '../services/allAPI'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';


function Cart() {
  const [cart, setCart] = useState([])
  const navigate = useNavigate()
  const [totalPrice, setTotalPrice] = useState(0)


   const handleGetCartProducts = async () => {
    const token = localStorage.getItem("token")
    if (!token) {
      navigate("/")
    } else {
      try {
        const reqHeader = {
          "authorization": `Bearer ${token}`
        }

        const result = await getCartProductsAPI(reqHeader)
        console.log(result);
        if (result.status === 200) {
          setCart(result.data)
          
          const total = cart.map((item)=>item.originalPrice).reduce((prev,curr)=>prev+curr,0)
          setTotalPrice(total)
        } else {
          setTotalPrice(0)
          console.log(result.response.data)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  const handleRemoveItemFromCart = async (id) => {
    const token = localStorage.getItem("token")
    if (!token) {
      navigate("/")
    } else {
      try {
        const reqHeader = {
          "authorization": `Bearer ${token}`
        }
        const result = await removeItemFromCartAPI(id, reqHeader)
        console.log(result);
        if (result.status === 200) {
          toast.success(result.data.message)
          handleGetCartProducts()
        } else {
          toast.error(result.response.data)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

 const handleIncrement = async(productId)=>{
  const token = localStorage.getItem("token")
  if(!token){
    navigate('/')
  }else{
    try {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await incrementQuantityAPI(productId,reqHeader)
      console.log(result);
      if(result.status==200){
        console.log(result.data);
      }else{
        console.log(result.response.data); 
      }
    } catch (error) {
      console.log(error);
    }
  }
 }

 const handleDecrement = async(productId)=>{
  const token = localStorage.getItem("token")
  if(!token){
    navigate('/')
  }else{
    try {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await decrementQuantityAPI(productId,reqHeader)
      console.log(result);
      if(result.status==200){
        console.log(result.data);
      }else{
        console.log(result.response.data); 
      }
    } catch (error) {
      console.log(error);
    }
  }
 }

  console.log(cart);
  useEffect(() => {
    handleGetCartProducts()
  }, [cart])

   
  return (
    <div className='container w-100' style={{ paddingTop: '150px',minHeight:'80vh' }}>
      {cart?.length > 0 ?
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto" >
            <Table striped bordered hover responsive>
              <thead>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </thead>
              <tbody>
               {cart?.map((item,index)=>(
                <tr key={index}>
                <td>{index+1}</td>
                <td>{item?.productId?.title}</td>
                <td><img width={'60px'} height={'60px'} src={item?.productId?.thumbnail} alt="" /></td>
                <td>
                  <div className='d-flex align-items-center'>
                    <span onClick={()=>{handleDecrement({productId:item?.productId?._id})}}  style={{ cursor: 'pointer' }} className=' fw-bolder pe-1'>-</span>
                    <input readOnly value={item?.quantity} type="text" style={{ width: '50px' }} className='form-control' />
                    <span onClick={()=>{handleIncrement({productId:item?.productId?._id})}} style={{ cursor: 'pointer' }} className='fw-bolder ps-1'>+</span>
                  </div>
                </td>
                <td>{item?.originalPrice}</td>
                <td>
                  <button onClick={() =>{handleRemoveItemFromCart(item?._id)}} className='btn btn-link'>
                    <i className="fa-solid fa-trash text-danger"></i></button>
                </td>
              </tr>
               )) }
              </tbody>
            </Table>
          </div>
          <div className='col-lg-4'>
            <div className="shadow rounded border p-4">
              <h5>Total Items: <span className='fw-bolder text-danger'>{cart?.length}</span></h5>
              <h4>Total Amount: <span className='fw-bolder text-danger'>${totalPrice}</span></h4>
              <hr />
              <div className="d-grid mt-4">
                <Link  to={'/order-details'}  className="btn btn-success text-decoration-none">Checkout</Link>
              </div>
            </div>
          </div>
        </div> :
        <div style={{ height: '50vh' }} className='d-flex justify-content-center align-items-center w-100'>
          <img className='img-fluid' src="https://i.postimg.cc/cHycxJXz/images.png" alt="" />
          <h2 className='text-black'>Your Cart is empty!</h2>
        </div>}
      <ToastContainer autoClose={2000} theme='dark' />
    </div>
  )
}

export default Cart