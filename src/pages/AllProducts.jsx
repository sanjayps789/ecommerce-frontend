import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAllProductsAPI } from '../services/allAPI';
import Loader from '../components/Loader';

function AllProducts() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const getProducts = async () => {
    const token = localStorage.getItem("token")
    try {
      if (!token) {
        toast.info("Please login !!!")
        navigate('/')
      } else {
        const reqHeader = {
          "authorization": `Bearer ${token}`
        }
        const result = await getAllProductsAPI(reqHeader)
        console.log(result);
        if (result.status == 200) {
          setProducts(result.data)
        } else {
          toast.error(result.response.data)
        }
      }
    } catch (error) {
      console.log(error);
    }

  }
  console.log(products);

 
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div style={{ paddingTop: '180px' }} className='w-100  d-flex align-items-center justify-content-center bg-secondary-subtle'>
      <div className='container'>
        <div className='w-75'>
          <input type="search" placeholder='Search Products By Name' className='form-control' />
        </div>
        <div className="row my-5 ">
          <h1 className='fw-bolder text-black  py-3'>All Products</h1>
          {products.length > 0 ?
            products.map((item, index) => (
              <div className="col-lg-3 col-md-4 mb-4 d-flex align-items-center justify-content-center ">
                <Card className="shadow" key={index} style={{ width: '18rem' }}>
                  <Card.Img style={{ height: '200px' }} className='img-fluid  w-100' variant="top" src={item?.thumbnail} />
                  <Card.Body>
                    <Card.Title>{item?.title.slice(0, 15)}...</Card.Title>
                    <Card.Text>
                      {item?.description.slice(0, 20)}...
                    </Card.Text>
                    <Link to={`/view/${item._id}`} className='btn btn-outline-primary' variant="light">View More</Link>
                  </Card.Body>
                </Card>
              </div>
            ))
            : <Loader/>
          }
        </div>
      </div>
      <ToastContainer autoClose={2000} theme='dark' />
    </div>
  )
}

export default AllProducts