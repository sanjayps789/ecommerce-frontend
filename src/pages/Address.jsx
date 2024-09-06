import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { addDeliveryAddressAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

function Address() {
    const [deliveryAddress,setDeliveryAddress]=useState({
        fullName:'',
        mobile:'',
        pincode:'',
        address:'',
        city:'',
        state:'',
        landmark:'',
        alternateMobile:'',
        addressType:''
    })

    const navigate = useNavigate()
    const handleInputData = async (e) =>{
        const {name,value} = e.target
        setDeliveryAddress({...deliveryAddress,[name]:value})
        console.log(deliveryAddress)
    }

    const handleDeliveryAddress = async (e) =>{
        e.preventDefault()
        const token = localStorage.getItem("token")
        if(!token){
            navigate('/')
        }else{
            const {fullName,mobile,pincode,address,city,state,landmark,alternateMobile,addressType} = deliveryAddress
            if(!fullName || !mobile || !pincode || !address || !city || !state || !landmark || !alternateMobile || !addressType){
                    toast.info("Please fill the form completely...")
                }else{
                    // api call
                    try {
                        const reqHeader = {
                            'Authorization': `Bearer ${token}`
                        }

                        const result = await addDeliveryAddressAPI(deliveryAddress,reqHeader)
                        if(result.status===200){
                            toast.success(result.data)
                            setDeliveryAddress({fullName:'',mobile:'',pincode:'',address:'',city:'',state:'',landmark:'',alternateMobile:'',addressType:''})
                            navigate('/payment')
                        }else{
                            toast.error(result.response.data)
                            // console.log(result.response.data.message);
                            
                        }
                    } catch (error) {
                        console.log(error);  
                    }
                }
        }
    }
    return (
        <div className='container w-100' style={{ paddingTop: '150px', minHeight: '80vh' }}>
            <div className="container py-5">
                <Form>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control value={deliveryAddress.fullName} onChange={handleInputData} name='fullName' type="text" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control value={deliveryAddress.mobile} onChange={handleInputData}  name='mobile' type="text" placeholder="10-Digit Mobile Number" />
                            </Form.Group>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <Form.Group className="mb-3" controlId="formBasicPincode">
                                <Form.Label>Pincode</Form.Label>
                                <Form.Control value={deliveryAddress.pincode} onChange={handleInputData}  name='pincode' type="text" placeholder="Pincode" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicLocality">
                                <Form.Label>Locality</Form.Label>
                                <Form.Control value={deliveryAddress.locality} onChange={handleInputData}  name='locality' type="text" placeholder="Locality" />
                            </Form.Group>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <Form.Group className="mb-3" controlId="formBasicAddress">
                                <Form.Label>Address</Form.Label>
                                <textarea value={deliveryAddress.address} onChange={handleInputData}  name='address' rows={3} className='form-control' type="text" placeholder="Address" />
                            </Form.Group>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <Form.Group className="mb-3" controlId="formBasicCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control value={deliveryAddress.city} onChange={handleInputData}  name='city' type="text" placeholder="City" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicLandmark">
                                    <Form.Label>Landmark</Form.Label>
                                    <Form.Control value={deliveryAddress.landmark} onChange={handleInputData}  name='landmark' type="text" placeholder="Landmark (optional)" />
                                </Form.Group>

                            </div>
                            <div className="col-lg-6">
                                <Form.Group className="mb-3" controlId="formBasicState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control value={deliveryAddress.state} onChange={handleInputData} name='state' type="text" placeholder="State" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicLandmark">
                                    <Form.Label>Alternate Phone Number</Form.Label>
                                    <Form.Control value={deliveryAddress.alternateMobile} onChange={handleInputData}  name='alternateMobile' type="text" placeholder="Alternate Phone Number" />
                                </Form.Group>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <Form.Group className="mb-3" controlId="formBasicAddressType">
                                    <Form.Label>Address Type</Form.Label>
                                    <Form.Select onChange={handleInputData} name='addressType' aria-label="Default select example">
                                        <option  >Open this select menu</option>
                                        <option value="Home">Home</option>
                                        <option value="Office">Office</option>
                                        <option value="Other">Other</option>
                                    </Form.Select> 
                                </Form.Group>
                            </div>
                            <div className="col-lg-6 col-md-6"></div>
                        </div>
                    </div>

                   <div className='text-start py-4'>
                        <button onClick={handleDeliveryAddress} style={{backgroundColor:'orangered'}} className='btn text-light  py-2'>Save and Deliver Here</button>
                        <button className='btn btn-light text-primary ms-3'>Cancel</button>
                   </div>
                </Form>
            </div>
            <ToastContainer theme='dark' autoClose={2000} />
       </div>
    )
}

export default Address