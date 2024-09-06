import React, { useEffect, useState } from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isLogOut, setIsLogOut] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  // Access the wishlist data from the reducer
  const wishlist = useSelector(state => state.wishlistReducer.wishlistData);
  const cart = useSelector(state => state.cartReducer.cartData);

  const token = localStorage.getItem("token");

  const handleLogOut = () => {
    setIsLogOut(true);
    setTimeout(() => {
      localStorage.removeItem("token");
      navigate('/login');
    }, 2000);
  };

  useEffect(() => {
    if (token) {
      setIsLogOut(false);
    }
  }, [token]);

  useEffect(()=>{},[wishlist,cart])

  const handleLinkClick = () => {
    setExpanded(false); // Collapse the navbar when a link is clicked
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-light w-100 py-4 shadow-lg position-fixed" style={{ zIndex: 1 }} expanded={expanded}>
        <Container>
          <Navbar.Brand className='text-black fw-bolder'>
            <Link className='text-decoration-none fw-bolder fs-2 text-black' to={'/'}>FASHION</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link>
                <Link className='fw-medium text-black text-decoration-none' to={'/main'} onClick={handleLinkClick}>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className='fw-medium text-black text-decoration-none' to={'/allproducts'} onClick={handleLinkClick}>Products</Link>
              </Nav.Link>
              <Nav.Link className='fs-6 mx-2'>
                <Link className='fw-medium btn btn-outline-dark' to={'/wishlist'} style={{ textDecoration: 'none', color: 'black' }} onClick={handleLinkClick}>
                  <i className="fa-solid fa-heart text-danger"></i> Wishlist
                  <Badge className='bg-dark text-white ms-2'>{wishlist.length}</Badge>
                </Link>
              </Nav.Link>
              <Nav.Link className='fs-6 mx-2'>
                <Link className='btn btn-outline-dark' to={'/cart'} style={{ textDecoration: 'none', color: 'black' }} onClick={handleLinkClick}>
                  <i className="fa-solid fa-cart-plus text-success fs-5"></i> Cart
                  <Badge className='bg-danger text-white ms-2'>{cart.length}</Badge>
                </Link>
              </Nav.Link>
              {!token ? (
                <Nav.Link>
                  <Link to={'/register'} className='btn text-white fw-medium' style={{ textDecoration: 'none', backgroundColor: 'black' }} onClick={handleLinkClick}>
                    signup
                  </Link>
                </Nav.Link>
              ) : (
                <Nav.Link>
                  <Link onClick={() => { handleLogOut(); handleLinkClick(); }} className='btn text-white fw-medium' style={{ textDecoration: 'none', backgroundColor: 'black' }}>
                    {isLogOut ? 'logging out...' : 'LogOut'}
                  </Link>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
