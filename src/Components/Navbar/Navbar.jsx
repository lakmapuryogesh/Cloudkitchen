import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Menu", "About", "Mobile App", "Contact Us"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row */}
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
        <div className="flex-shrink-0">
           <Link to={'/'}><img src={assets.logo} alt="Logo" className="h-8 sm:h-10 w-auto" /></Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-4 xl:space-x-6 items-center text-base xl:text-lg text-gray-700">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => setMenu(item)}
                className={`relative cursor-pointer hover:text-blue-600 transition-colors ${
                  menu === item ? "text-blue-600" : ""
                }`}
              >
                {item}
                {menu === item && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded"></span>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <img
              src={assets.search_icon}
              alt="Search"
              className="w-5 h-5 xl:w-6 xl:h-6 cursor-pointer hover:scale-110 transition-transform"
            />
            <div className="relative cursor-pointer hover:scale-110 transition-transform">
              <Link to={'/cart'} onClick={() => setIsOpen(false)}>
              <img src={assets.basket_icon} alt="Basket" className="w-5 h-5 xl:w-6 xl:h-6" /></Link>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </div>
            <button onClick={()=>setShowLogin(true)} 
            className="bg-blue-600 text-white px-4 xl:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm xl:text-base">
              Sign In
            </button>
          </div>

          {/* Tablet Menu - Show on medium screens */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <img
              src={assets.search_icon}
              alt="Search"
              className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform"
            />
            <div className="relative cursor-pointer hover:scale-110 transition-transform">
              <Link to={'/cart'} >
              <img src={assets.basket_icon} alt="Basket" className="w-5 h-5" />
              </Link>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Sign In
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-4 space-y-4 border-t border-gray-200">
            {/* Menu Items */}
            <ul className="flex flex-col space-y-3 text-lg text-gray-700 pt-4">
              {menuItems.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setMenu(item);
                    setIsOpen(false);
                  }}
                  className={`cursor-pointer hover:text-blue-600 transition-colors ${
                    menu === item ? "text-blue-600" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Icons & Button - Vertical */}
            <div className="flex flex-col items-start space-y-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <img
                  src={assets.search_icon}
                  alt="Search"
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                />
                <div className="relative cursor-pointer hover:scale-110 transition-transform">
                 <Link to='/cart' onClick={() => setIsOpen(false)}>
                  <img src={assets.basket_icon} alt="Basket" className="w-6 h-6" />
                  </Link>
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                    2
                  </span>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
