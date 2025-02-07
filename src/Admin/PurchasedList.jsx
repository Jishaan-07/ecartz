import React from 'react'
import { Table } from 'react-bootstrap'
import Header from '../Components/Header'
import SideNavbar from '../Components/SideNavbar'

const PurchasedList = () => {
  return (
    <>
    <Header/>
       <div style={{paddingTop:'100px'}} className=" ">
 <SideNavbar/>

        {/* Main Content */}
        <div className="container p-5">
          <h1
            style={{
              fontFamily: '"Hubot Sans", serif',
              fontSize: '2rem',
              opacity: 0.9,
              marginBottom: '20px',
            }}
            className="fw-bolder"
          >
            Orders
          </h1>
  
      

          {/* Bookings Table */}
         
            <Table striped bordered hover responsive="md" className="text-center">
              <thead className="table-primary">
                <tr>
                  <th>#</th>
                  <th>UserName</th>
                  <th>Date</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Confirmation</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr  >
                    <td>1</td>
                    <td>riza</td>
                    <td>12/12/2021</td>
                    <td>Shampoo</td>
                    <td>$200</td>
                    <td><button className='bg-green-300 p-2 mx-2 rounded'><i class="fa-solid fa-check"></i></button>
                   <button className=' bg-red-400 p-2 rounded'> <i class="fa-solid fa-xmark"></i></button></td>

                  </tr>
             
              </tbody>
            </Table>
 

      
        </div>
      </div>
    </>
  )
}

export default PurchasedList