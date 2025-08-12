import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Menu", "About", "Mobile App", "Contact Us"];

  return (
    <nav className="fixed  top-0 left-0 w-full z-50 bg-white shadow-md font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row */}
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={assets.logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center text-lg text-gray-700">
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
          <div className="hidden md:flex items-center space-x-6">
            <img
              src={assets.search_icon}
              alt="Search"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
            />
            <div className="relative cursor-pointer hover:scale-110 transition-transform">
              <img src={assets.basket_icon} alt="Basket" className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
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
          <div className="md:hidden mt-2 space-y-4">
            {/* Menu Items */}
            <ul className="flex flex-col space-y-2 text-lg text-gray-700">
              {menuItems.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setMenu(item);
                    setIsOpen(false);
                  }}
                  className={`cursor-pointer hover:text-blue-600 ${
                    menu === item ? "text-blue-600" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Icons & Button - Vertical */}
            <div className="flex flex-col items-start space-y-4">
              <img
                src={assets.search_icon}
                alt="Search"
                className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
              />
              <div className="relative cursor-pointer hover:scale-110 transition-transform">
                <img src={assets.basket_icon} alt="Basket" className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  2
                </span>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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
