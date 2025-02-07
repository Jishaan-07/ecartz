import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadImg from '../assets/uploadImg.jpg'
import { Form } from 'react-bootstrap';
import { addProductAPI } from '../services/allApi';




const AddProduct = () => {


    const[preview,setPreview]=useState("")
  const [uploadFileStatus,setUploadFileStatus]=useState(false)

  const [productDetails, setProductDetails] = useState({
    name: "",  price: "", brand: "", description: "", stock: "", productImage: ""
  })
  console.log(productDetails);



  useEffect(()=>{
    if(productDetails.productImage.type=="image/png" || productDetails.productImage.type=="image/jpg" ||  productDetails.productImage.type=="image/jpeg" ){
      setUploadFileStatus(true)
     setPreview (URL.createObjectURL(productDetails.productImage))
    }else{
      setUploadFileStatus(false)
      setProductDetails({...productDetails,productImage:""})
    }
  },[productDetails.productImage])

  const [show, setShow] = useState(false);


  const handleAddProduct = async () => {
    const { name, price, brand, description, stock, productImage } = productDetails;
    
    if (name && price && brand && description && stock && productImage) {
        try {
            // Retrieve the token from local storage
            const token = sessionStorage.getItem("token");  
            
            if (!token) {
                alert("User is not authenticated. Please log in.");
                return;
            }

            // Create FormData object
            const reqBody = new FormData();
            reqBody.append("name", name);
            reqBody.append("price", price);
            reqBody.append("brand", brand);
            reqBody.append("description", description);
            reqBody.append("stock", stock);
            reqBody.append("productImage", productImage);

            // Define request headers
            const reqHeader = {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}` // Use the token here
            };

            // Make API call


            
            const result = await addProductAPI(reqBody, reqHeader);
            console.log(result);

            if (result.status === 200) {
                alert(`${result?.data?.name} Added Successfully!!!`);
                handleClose();
            } else if (result.response?.status === 406) {
                alert(result.response.data);
            }
        } catch (err) {
            console.error("Error adding product:", err);
        }
    } else {
        alert("Please Fill The Form Completely");
    }
};


  const handleClose = () => {
    setShow(false)
    setPreview("")
    setUploadFileStatus(false)
    setProductDetails({name: "",  price: "", brand: "", description: "", stock: "", productImage: ""})
  };
  const handleShow = () => setShow(true);
  return (

    <>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{
            fontFamily: '"Hubot Sans", serif',
            fontSize: '4rem',
            opacity: 0.9,
            marginBottom: '20px',
          }}
            className="fw-bolder"><span className='text-info'>Product</span> Adding</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className='d-flex justify-content-center'>
              <label>
                <input onChange={e=>setProductDetails({...productDetails,productImage:e.target.files[0]})}
                  type="file"
                  style={{ display: "none" }}

                />
                <img width={"300px"} src={preview?preview:uploadImg} alt="" />
              </label>
            </div>
          { !uploadFileStatus && 
          <div className="text-danger text-center fw-bolder">Upload only (jpeg,png,jpg) files only!!!</div>
          }

            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control value={productDetails.name} onChange={e=>setProductDetails({...productDetails,name:e.target.value})}
                type="text"
                placeholder="Enter Product name"


              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Brand</Form.Label>
              <Form.Control  value={productDetails.brand} onChange={e=>setProductDetails({...productDetails,brand:e.target.value})}
                type="text"
                placeholder="Enter Product Brand"


              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control  value={productDetails.stock} onChange={e=>setProductDetails({...productDetails,stock:e.target.value})}
                type="text"
                placeholder="Enter Number of Stock Available"


              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>  Description</Form.Label>
              <Form.Control as={'textarea'}  value={productDetails.description} onChange={e=>setProductDetails({...productDetails,description:e.target.value})}
                type="text "
                placeholder="Enter Product Description"


              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>  Price</Form.Label>
              <Form.Control  value={productDetails.price} onChange={e=>setProductDetails({...productDetails,price:e.target.value})}
                type="text"
                placeholder="Enter Product Price"


              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary" >
            Close
          </Button>
          <Button onClick={handleAddProduct} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProduct