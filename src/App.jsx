import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Auth from './pages/Auth'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Address from './pages/Address'
import Payment from './pages/Payment'

function App() {
  return (
    <>
    <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/main' element={<LandingPage/>}/>
    <Route path='/allproducts' element={<AllProducts/>}/>
    <Route path='/login' element={<Auth/>}/>
    <Route path='/register' element={<Auth insideRegister/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/order-details' element={<Address/>}/>
    <Route path='/view/:id' element={<View/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/*' element={<Navigate to={'/'}/>}/>
  </Routes>
  <Footer/>
    </>
  )
}

export default App
