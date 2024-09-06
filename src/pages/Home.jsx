import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>      
        <section style={{paddingTop:'150px'}} className='w-100 pb-5'>
          <div className="container">
            <div className="row d-flex align-items-center w-100">
              <div className="col-lg-6 col-md-6">
                <h1 style={{fontSize:'4rem'}} className='text-black fw-bolder'>
                 <span className='mb-2'> LET'S </span><br />
                  <span className='mb-2'>EXPLORE </span><br />
                  <span style={{backgroundColor:'#faf864'}} className=' px-3'>UNIQUE</span> <br />
                 <span className='my-3'> CLOTHES.</span>
                </h1>
                <h5>Live for influential and Innovative fashion!</h5>
                <div className='my-4 text-start'>
                  <Link to={'/login'} style={{textDecoration:'none',backgroundColor:'black'}} className="btn text-white px-4 py-3">Shop Now</Link>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 mx-auto my-auto">
                <img  className='img-fluid w-100' src="https://i.postimg.cc/fbq5S9HC/modeledit-removebg-preview.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* section 2 */}
        <section className='py-5 w-100'style={{backgroundColor:'#faf864'}} >
          <div className="container w-100 d-none d-lg-block">
            <div className="d-flex align-items-center justify-content-evenly w-100 ">
              <img className='c img-fluid'  src="https://i.postimg.cc/cHJYLhtF/H-M.jpg" alt="" />
              <img className='c img-fluid'   src="https://i.postimg.cc/CM7D9zdF/obey-removebg-preview.png" alt="" />
              <img className='c img-fluid'   src="https://i.postimg.cc/fRpgXHhg/shopify.png" alt="" />
              <img className='c img-fluid'   src="https://i.postimg.cc/CKKyGwmM/images.png" alt="" />
              <img className='c img-fluid'   src="https://i.postimg.cc/N0ff97RV/levis.png" alt="" />
              <img className='c img-fluid'   src="https://i.postimg.cc/Y9KnD88D/amazon-logo.png" alt="" />
            </div>
            
          </div>
          <marquee behavior="scroll" direction="left" scrollamount="10"  className="container w-100 d-lg-none d-block">
            <div className="d-flex align-items-center justify-content-evenly gap-5 w-50">
              <img className='c img-fluid'  src="https://i.postimg.cc/cHJYLhtF/H-M.jpg" alt="" />
              <img className='c img-fluid'   src="https://i.postimg.cc/CM7D9zdF/obey-removebg-preview.png" alt="" />
              <img className='c img-fluid'   src="https://i.postimg.cc/fRpgXHhg/shopify.png" alt="" />
              <img className='c img-fluid'   src="https://i.postimg.cc/CKKyGwmM/images.png" alt="" />
              <img className='c img-fluid'   src="https://i.postimg.cc/N0ff97RV/levis.png" alt="" />
              <img className='c img-fluid'   src="https://i.postimg.cc/Y9KnD88D/amazon-logo.png" alt="" />
            </div>
            
          </marquee>
        </section>
  
        {/* section 3 */}
        <section className='py-5'>
          <div className="container w-100">
         <div className='row w-100'>
          <h1 className='fw-bolder text-black mb-5'>NEW ARRIVALS</h1>
            <div className='col-lg-4 col-md-4 '>
              <div className='container w-75'>
                <Card style={{ width: '18rem',border:'none' }}>
              <Card.Img className='img-fluid  w-100' style={{height:'400px'}} variant="top" src="https://i.postimg.cc/fyp5pkqw/1.png" />
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span className='fw-medium text-black'>Hoodies & Sweat Shirts</span>
                  <i className="fa-solid fa-arrow-right text-black"></i>
                </div>
                <span style={{fontSize:'15px',color:'gray'}}>Explore Now!</span>
              </Card.Body>
            </Card>
              </div>
            </div>
  
            <div className='col-lg-4 col-md-4'>
            <div className='container w-75'>
                <Card style={{ width: '18rem',border:'none' }}>
              <Card.Img className='img-fluid  w-100' style={{height:'400px'}} variant="top" src="https://i.postimg.cc/Cx117gRx/2.png" />
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span className='fw-medium text-black'>Coats & Parkas</span>
                  <i className="fa-solid fa-arrow-right text-black"></i>
                </div>
                <span style={{fontSize:'15px',color:'gray'}}>Explore Now!</span>
              </Card.Body>
            </Card>
            </div>
            </div>
  
            <div className='col-lg-4 col-md-4'>
            <div className='container w-75 '>
                <Card className style={{ width: '18rem',border:'none' }}>
              <Card.Img className='img-fluid  w-100' style={{height:'400px'}} variant="top" src="https://i.postimg.cc/P5RRpWG5/3.png" />
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span className='fw-medium text-black'>Tees & T-Shirt</span>
                  <i className="fa-solid fa-arrow-right text-black"></i>
                </div>
                <span style={{fontSize:'15px',color:'gray'}}>Explore Now!</span>
              </Card.Body>
            </Card>
            </div>
            </div>
         </div>
          </div>
        </section>

        <section style={{backgroundColor:'#faf864'}} className='w-100 py-5 d-flex align-items-center justify-content-center'>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-evenly">
          <div className="col-lg-6 col-md-6">
        <img style={{objectFit:'contain'}} className='img-fluid w-100' src="https://i.postimg.cc/NGbFhFqx/hero2.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 mt-3">
              <span  style={{fontSize:'4rem'}} className='fw-bolder text-black bg-light px-3 mb-3'>PAYDAY</span> <br />
              <span  style={{fontSize:'4.3rem'}} className='fw-bolder text-black'>SALE NOW</span> 
            <p className='fs-5 text-black fw-medium '>Spend minimal $100 get 30% off <br />
             voucher code for your next purchase</p>
             <h5 className='text-black fw-bold '>1 June - 10 June 2024</h5>
             <p className='text-black fw-medium'>*Terms & Conditions apply</p>
             <Link style={{textDecoration:'none',backgroundColor:'black'}} className='btn text-white px-3 py-2'>Shop Now</Link>
          </div>
        </div>
      </div>
        </section>
      
      <section className='w-100 py-5 d-flex align-items-center justify-content-center'>
        <div className="container">
         <div className='row'>
          <h1 className='fw-bolder text-black mb-5'>Young's Favourite</h1>
            <div className='col-lg-6 col-md-6'>
              <Card style={{ width: '100%',border:'none' }}>
            <Card.Img className='img-fluid  w-100' variant="top" src="https://i.postimg.cc/66kk070Q/5.png" />
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center w-100">
                <span className='fw-medium text-black'>Trending on Instagram</span>
                <i className="fa-solid fa-arrow-right text-black"></i>
              </div>
              <span style={{fontSize:'15px',color:'gray'}}>Explore Now!</span>
            </Card.Body>
          </Card>
            </div>

            <div className='col-lg-6 col-md-6'>
              <Card style={{ width: '100%',border:'none' }}>
            <Card.Img className='img-fluid  w-100'  variant="top" src="https://i.postimg.cc/DZ9b0dKs/4.png" />
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center w-100">
                <span className='fw-medium text-black'>All Under $40</span>
                <i className="fa-solid fa-arrow-right text-black"></i>
              </div>
              <span style={{fontSize:'15px',color:'gray'}}>Explore Now!</span>
            </Card.Body>
          </Card>
            </div>
          </div>
       </div>
      </section>

      <section className='py-5 bg-secondary-subtle'>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className='d-flex align-items-center justify-start flex-column'>
                <h1 className='text-black fw-bolder mb-3'>DOWNLOAD APP & <br />
                GET THE VOUCHER!</h1>
                <p className='py-3'>Get 30% off for first transaction using 
                Randvision <br />mobile app for now.</p>
                <div className='d-lg-flex d-flex align-items-center justify-content-center flex-column flex-lg-row'>
                  <button className='btn btn-sm'>
                    <img className='img-fluid w-auto' src="https://i.postimg.cc/Tw3JXcJc/app-store.png" alt="" />
                    </button>
                    <button className='btn btn-sm'> 
                      <img className='img-fluid w-auto' src="https://i.postimg.cc/RhfRPZRr/play-store.png" alt="" /></button>
                   
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
            <img style={{height:'600px'}} className='img-fluid' src="https://i.postimg.cc/wBHSLS9T/app.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section style={{backgroundColor:'#faf864'}} className='py-5 '>
       <div className='container w-lg-50'>
         <div className=' d-flex flex-column align-items-center justify-content-center p-4'>
            <h2 className="fw-bolder text-black ">
              JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
            </h2>
            <p className='pb-2'>Type your email down below and be young wild generation</p>
         <div  className='d-flex gap-2'>
            <input style={{width:'300px',outline:'none'}} placeholder='Add your email here' className='form-control ' type="text" />
            <button style={{backgroundColor:'black'}}  className="btn text-white">send</button>
         </div>
         </div>
       </div>
      </section>
    </>
    
  )
}

export default Home