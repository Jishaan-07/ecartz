import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByIDAPI } from "../services/allApi"; // Adjust the import path
import Header from "../Components/Header";

const View = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) {
      console.error("No product ID found in URL");
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await getProductByIDAPI(id);
        if (response.success) {
          setProduct(response.product);
        } else {
          console.log("Error:", response.message);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="text-center text-lg">Loading product details...</p>;
  }

  return (
    <>
      <Header />
      <div className="flex flex-col mx-5">
        <div className="grid md:grid-cols-2 gap-10 items-center min-h-screen">
          
          {/* Image Section */}
          <div className="flex justify-center">
            <img 
              className="w-[350px] h-[250px] md:w-[400px] md:h-[300px] object-cover"
              src={`${SERVER_BASE_URL}/uploads/${product.productImage}`} // Adjust if needed
              alt={product.name} 
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-black">{product.name}</h1>
            <h4 className="font-bold text-xl text-red-600">$ {product.price}</h4>
            <h4 className="text-lg">Brand: {product.brand}</h4>
            <p className="text-sm md:text-base mt-2">
              <span className="font-bold">Description</span>: {product.description}
            </p>
            <h3 className="font-bold mt-4 text-red-600 text-lg">*Available Stock: {product.stock} pieces</h3>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-5">
              <button className="bg-green-500 rounded p-3 text-white w-full sm:w-auto">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
