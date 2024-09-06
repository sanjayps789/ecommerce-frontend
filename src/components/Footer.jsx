import React from 'react'

function Footer() {
  return (
   <div className='bg-black text-white  w-100 py-5'>
    <div className="container">
      <div className="row d-flex justify-content-center align-items-start">
        <div className="col-lg-3 mb-5">
          <h3 className='mb-4 fw-bold'>FASHION</h3>
          <p style={{color:'GrayText'}}>Complete your style with awesome <br />
          clothes from us.</p>
          <div className='d-flex gap-4'>
            <i style={{color:'gray'}} className="fa-brands fa-square-facebook fs-3"></i>
            <i style={{color:'gray'}} className="fa-brands fa-square-instagram fs-3"></i>
            <i style={{color:'gray'}} className="fa-brands fa-square-twitter fs-3"></i>
            <i style={{color:'gray'}} className="fa-brands fa-linkedin fs-3"></i>
          </div>
        </div>
        <div className="col-lg-3 mb-3">
          <ul className='d-flex gap-2 flex-column'>
            <li className='mb-3'>Company</li>
            <li style={{color:'GrayText'}}>About </li>
            <li style={{color:'GrayText'}}>Contact Us</li>
            <li style={{color:'GrayText'}}>Support</li>
            <li style={{color:'GrayText'}}>Careers</li>
          </ul>
         
        </div>
        <div className="col-lg-3 mb-3">
          <ul className='d-flex gap-2 flex-column '>
          <li className='mb-3'>Quick Link</li>
            <li style={{color:'GrayText'}}>Share Location</li>
            <li style={{color:'GrayText'}}>Orders Tracking</li>
            <li style={{color:'GrayText'}}>Size Guide</li>
            <li style={{color:'GrayText'}}>FAQs</li>
          </ul>
        </div>
        <div className="col-lg-3 ">
              <ul className='d-flex gap-2 flex-column'>
              <li className='mb-3'>Legal</li>
                <li style={{color:'GrayText'}}>Terms & Conditions</li>
                <li style={{color:'GrayText'}}>Privacy Policy</li>
              </ul>
        </div>
      </div>
    </div>

   </div>
  )
}

export default Footer