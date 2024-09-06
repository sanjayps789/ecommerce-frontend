import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPI';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../Redux/Slices/userSlice';
import OAuth from '../components/OAuth';

function Auth({insideRegister}) {
  const users = useSelector(state=>state.userReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [inputData,setInputData] = useState({
    username:"",email:"",password:""
  })
  const [validUserName,setValidUserName] = useState(false)
  const [validEmail,setValidEmail] = useState(false)
  const [validPassword,setValidPassword] = useState(false)


  // funtion for handling data from inputfileds && Validation
  const handleInputData = (e) =>{
    const {name,value} = e.target
    // ---------Validation Username------------
if(name=="username"){
  if(value.match(/^[a-zA-Z0-9 ]{5,15}$/) || ""){
    setValidUserName(false)
  }else{
    setValidUserName(true)
  }
}

// ---------Validation Email------------
if(name=="email"){
  if(value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) || ""){
    setValidEmail(false)
  }else{
    setValidEmail(true)
  }
}
// ---------Validation Password------------
if(name=="password"){
  if(value.match(/^[a-zA-Z0-9]{3,9}$/) || ""){
    setValidPassword(false)
  }else{
    setValidPassword(true)
  }
}
    setInputData({...inputData,[name]:value})
  }

  // Register button
  const handleRegister = async(e) =>{
    e.preventDefault()
    const {username,email,password} = inputData
    if(!username || !email || !password){
      toast.info("Please fill the form completely...")
    }else{
      // api call
      try{
        const result = await registerAPI(inputData)
        // console.log(result.data);
        if(result.status==200){
          toast.success(`Welcome ${result.data.username}... Please Login to explore more!!!`)
          setInputData({username:"",email:"",password:""})
          setTimeout(()=>{
            navigate('/login')
          },1800)
            
        }else{
          toast.warning(result.response.data)
          setTimeout(()=>{
            navigate('/login')
          },1800)
        }
      }catch(err){
        console.log(err);
      }
    }
  }

  // Login Button
const handleLogin = async(e) =>{
  e.preventDefault()
  const {email,password} = inputData
  if(!email || !password){
    toast.info("Please fill the form completely")
  }else{
    // api call
    try{
     const result = await loginAPI({email,password})
     console.log(result.data);
     if(result.status==200){
      dispatch(addUser(result.data))
        localStorage.setItem("token",result.data.token)
        // localStorage.setItem("userInfo",JSON.stringify(result.data.userDetails))
        navigate('/allProducts')
     }else{
      toast.error(result.response.data)
     }
    }catch(err){
      console.log(err);
    }
  }
}
  // console.log(inputData);
  return (
    <div style={{paddingTop:'110px'}} className='w-100    d-flex justify-content-center align-items-center'>
      <div className="container w-lg-75 py-5">
        <div  className="card  shadow">
        <div className="row d-flex align-items-center p-5">
          <div className="col-lg-5 col-md-5 rounded">
            <img className='w-100 img-fluid' src="https://i.postimg.cc/66kk070Q/5.png" alt="" />
          </div>
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-6 col-md-5">
        <Form >
          <h3 className='fw-bolder text-black text-center py-2'>
           {insideRegister? "SignUp":"Sign In "}
            </h3>
        {insideRegister&&<FloatingLabel controlId="floatingInputUsername" label="Username" className="mb-3" >
          <Form.Control type="text" name='username' value={inputData.username} onChange={handleInputData} placeholder="Username" />
          {validUserName&& <p className='text-danger fw-bolder mt-2'>Invalid Username</p>}
        </FloatingLabel>
        }
          <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" >
          <Form.Control type="email" name='email' value={inputData.email} onChange={handleInputData} placeholder="name@example.com" />
        </FloatingLabel>
        {validEmail&& <p className='text-danger fw-bolder mt-2'>Invalid Email Address</p>}

        <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
          <Form.Control type="password" name='password' value={inputData.password} onChange={handleInputData} placeholder="Password" />
        </FloatingLabel>
        {validPassword&& <p className='text-danger fw-bolder mt-2'>Invalid Password</p>}

        <div className="mb-3">
          {insideRegister?
            <div className='mt-3 d-grid'>
              <button onClick={handleRegister} style={{backgroundColor:'black'}}  className="btn text-white  px-4">SIGN UP</button>
              </div>
            :
            <div className='mt-3 d-grid'>
              <button onClick={handleLogin} style={{backgroundColor:'black'}}  className="btn text-white  px-4">SIGN IN</button>
              </div>
          }
        </div>
        <div className='text-center mb-3'>OR</div>
        <OAuth/>
        <div>
         { insideRegister?
         <p className='text-dark mt-3'>Already have an Account? Click here to <Link className='text-primary' to={'/login'}>Login</Link></p>:
          <p className='text-dark mt-3'>New User? Click here to <Link className='text-primary' to={'/register'}>Register</Link></p>}
       </div>
        </Form>
          </div>
        </div>
        </div>
      </div>
      <ToastContainer theme='dark' autoClose={1800} />
    </div>
  )
}
export default Auth