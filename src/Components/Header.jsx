import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center bg-gray-200 fixed w-full p-3 text-white font-bold shadow-md">
        {/* Logo */}
        <Link className="text-2xl md:text-3xl flex items-center" to={"/"}>
          <i className="fa-solid fa-store mr-2"></i> E-Cartz
        </Link>

        {/* Search Bar (Hidden on Small Screens) */}
        <div className="hidden md:flex flex-1 justify-center">
          <input
            className="rounded p-2 text-black w-[300px] md:w-[350px]"
            type="text"
            placeholder="Search Any Products"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="ml-auto md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto left-0 top-14 md:top-0 transition-all ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <li className="list-none px-5 md:hidden">
            <input
              className="rounded p-2 text-black w-full"
              type="text"
              placeholder="Search Any Products"
            />
          </li>
          <li className="list-none px-5">
            <Link to={"/cart"} className="flex items-center">
              <i className="fa-solid fa-cart-shopping text-green-500 mr-1"></i>
              Cart <span className="bg-red-600 text-white rounded px-2 ml-1">5</span>
            </Link>
          </li>
          <li className="list-none px-5">
            <Link to={"/login"} className="hover:text-gray-300">Logout</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
