import React, { useEffect, useState } from "react";
import landng from "../assets/landing.png";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/Header";
import { allProductsAPI } from "../services/allApi";
const Home = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [homeProducts, setHomeProducts] = useState([])

  console.log(homeProducts);

  useEffect(() => {
    getAllProducts()
    if (sessionStorage.getItem("token")) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])


  const getAllProducts = async () => {
    try {
      const result = await allProductsAPI()
      console.log(result);
      if (result.status == 200) {
        setHomeProducts(result.data)
      }

    } catch (err) {
      console.log(err);

    }
  }

  return (
    <>
      <Header />
      <div className="pt-[80px]">
        {/* Hero Section */}
        <div className="position-relative flex justify-center items-center">
          <img src={landng} alt="Landing" className="img-fluid w-full" />
          {isLogin ?

            <Link
              to="/cart"
              className="position-absolute px-4 py-3 bg-secondary text-white text-lg rounded"
              style={{ bottom: "10%", display: 'none', textDecoration: 'none', left: "50%", transform: "translateX(-50%)" }}
            >
              Shop Now
            </Link>

            :
            <Link
              to="/login"
              className="position-absolute px-4 py-3 bg-secondary text-white text-lg rounded"
              style={{ bottom: "10%", left: "50%", textDecoration: 'none', transform: "translateX(-50%)" }}
            >
              Get Started
            </Link>

          }
        </div>

        {/* Latest Arrivals Section */}
        <div className="container mt-5 text-center">
          <h1 className="fw-bolder text-3xl md:text-6xl">Latest Arrivals</h1>
          <hr />
        </div>

        {/* Product Grid */}
        <div className="container d-flex justify-content-center align-items-center flex-wrap">
          {/* Product Card */}

          {homeProducts?.map(product => (
            <ProductCard displayData={product} />
          ))

          }
        </div>
      </div>
    </>
  );
};

export default Home;
