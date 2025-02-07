import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import { Col, Row } from 'react-bootstrap'
import AddProduct from '../Components/AddProduct'
import Header from '../Components/Header'
import SideNavbar from '../Components/SideNavbar'
import { allProductsAPI } from '../services/allApi'
const AdminHome = () => {
  const[allProducts,setAllProducts]=useState([])
  console.log(allProducts);

  useEffect(()=>{
    getAllProducts()
  },[])
  const getAllProducts = async () => {
    try {
      const result = await allProductsAPI()
      console.log(result);
      if (result.status == 200) {
        setAllProducts(result.data)
      }

    } catch (err) {
      console.log(err);

    }
  }

  return (
    <>
    <Header/>
     <div style={{paddingTop:'100px'}} className='container'>
      <SideNavbar/>
        <h1
          style={{
            fontFamily: '"Hubot Sans", serif',
            fontSize: '4rem',
            opacity: 0.9,
            marginBottom: '20px',
          }}
          className="fw-bolder"
        >
          <span className="text-primary fw-bolder">Add</span> Product
        </h1><hr />
          <AddProduct/>
  
        <div style={{paddingTop:'80px'}} className="d-flex">
  
  
          <div className="py-5  ">
            <h1
              style={{
                fontFamily: '"Hubot Sans", serif',
                fontSize: '4rem',
                opacity: 0.9,
                marginBottom: '20px',
              }}
              className="fw-bolder"
            >
              <span className="text-primary fw-bolder">Products</span> Lists
            </h1><hr />
            <div className="d-flex justify-content-center align-items-center mt-5 flex-wrap">
         {  allProducts?.map(product=>(
          <ProductCard displayData={product}  />

         ))
         } 
  
  
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default AdminHome