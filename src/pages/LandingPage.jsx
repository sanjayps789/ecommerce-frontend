import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../services/allAPI';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'

function LandingPage() {
    const [category, setCategory] = useState([]);
    const serverUrl = "http://localhost:4000"
    const handleGetCAtegories = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/");
        }else{
            try {
                const reqHeader = {
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                }
                const result = await getAllCategories(reqHeader)
                console.log(result);
                if(result.status===200){
                    setCategory(result.data)
                }else{
                    toast.error(result.response.data)
                }
            } catch (error) {
                console.log(error);
            }
        }
       
    }

    useEffect(() => {
        handleGetCAtegories()
    }, [])
    console.log(category);
  return (
    <div style={{paddingTop:'150px'}} className='w-100 '>
       <div className='container'> 
        <h3 className='fw-bold py-2 text-black'>Categories</h3>
        <div className="row py-5 d-flex align-items-center justify-content-between w-100">
           {category?.length>0 ?
           category?.map((item,index)=>(
            <div key={index} className="col-lg-2 col-md-2 col-6 py-3">
            <Link  style={{width:'160px'}} className="card border-0 text-decoration-none p-3">
                <img style={{height:'100px'}} className='w-100 img-fluid' src={`${serverUrl}/uploads/${item?.image}`} alt="" />
                <div className="card-body">
                    <h6 className="card-title text-center">{item?.categoryName}</h6>
                </div>
            </Link>
        </div>
           )) :
           <h3>No Categories Found</h3>
            }
        </div>
        </div>
        <ToastContainer autoClose={2000} theme='dark' />

    </div>
  )
}

export default LandingPage