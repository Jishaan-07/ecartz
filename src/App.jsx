import { useState } from 'react'
 
import './App.css'
 import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Cart from './pages/Cart'
import View from './pages/View'
import AdminHome from './Admin/AdminHome'
 import PurchasedList from './Admin/PurchasedList'
 
function App() {
 
  return (
    <>

      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/register' element={<Auth insideRegister={true} />} /> 
        <Route path='/login' element={<Auth/>} /> 
        <Route path='/cart' element={<Cart/>} /> 
        <Route path='/view/:id' element={<View/>} /> 
        <Route path='/admin/home' element={<AdminHome/>} /> 
         <Route path='/admin/purchased-list' element={<PurchasedList/>} /> 

      </Routes>


       <Footer/>
    </>
  )
}

export default App
