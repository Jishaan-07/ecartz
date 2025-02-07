import React from "react";
import imgs from "../assets/imgs.jpg";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

const Cart = () => {
  return (
    <>
        <Header/>
      <div className="px-5 pt-[100px]">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-green-800 text-center md:text-left">
          Cart Summary
        </h1>
  
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 border rounded p-5 shadow">
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-sm md:text-base">
                <thead>
                  <tr className="border-b">
                    <th className="font-semibold p-2">#</th>
                    <th className="font-semibold p-2">Name</th>
                    <th className="font-semibold p-2">Image</th>
                    <th className="font-semibold p-2">Quantity</th>
                    <th className="font-semibold p-2">Price</th>
                    <th className="font-semibold p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center border-b">
                    <td className="p-2">1</td>
                    <td className="p-2">Sunscreen</td>
                    <td className="p-2">
                      <img className="w-[70px] h-[70px] object-cover" src={imgs} alt="Product" />
                    </td>
                    <td className="p-2">
                      <div className="flex justify-center items-center space-x-2">
                        <button className="bg-gray-200 px-3 py-1 rounded font-bold">-</button>
                        <input
                          type="text"
                          readOnly
                          className="border p-1 text-center w-10 rounded"
                        />
                        <button className="bg-gray-200 px-3 py-1 rounded font-bold">+</button>
                      </div>
                    </td>
                    <td className="p-2">$ 200</td>
                    <td className="p-2">
                      <button>
                        <i className="fa-regular fa-trash-can text-red-500 text-lg"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            {/* Cart Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-5">
              <button className="bg-red-700 rounded p-2 text-white w-full sm:w-auto">
                Empty Cart
              </button>
              <Link to={"/"} className="bg-blue-800 rounded p-2 text-white w-full sm:w-auto text-center">
                Shop More
              </Link>
            </div>
          </div>
  
          {/* Summary Section */}
          <div className="border rounded shadow p-5">
            <h2 className="text-xl md:text-2xl font-bold my-4">
              Total Amount: <span className="text-red-600">$500</span>
            </h2>
            <hr />
            <button className="bg-blue-700 rounded p-3 text-xl text-white w-full mt-4">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
