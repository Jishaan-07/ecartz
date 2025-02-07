import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imgs from "../assets/imgs.jpg";
import { Link } from 'react-router-dom';
import Header from "../Components/Header";
import SERVER_BASE_URL from '../services/serverUrl';

const ProductCard = ({displayData}) => {
    return (
        <>
             <Card className='shadow mx-3 my-4' style={{ width: '18rem' }}>
                <Card.Img className='img-fluid' variant="top" src={`${SERVER_BASE_URL}/uploads/${displayData?.productImage}`} />
                <Card.Body className='d-flex justify-center align-items-center flex-column'>
                    <Card.Title>{displayData?.name}</Card.Title>
                    <Card.Text>
                        <p>$ {displayData?.price}</p>
                    </Card.Text>
                    <Link to={'/view/:id'}>
                        <Button variant="primary">View More</Button>

                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductCard