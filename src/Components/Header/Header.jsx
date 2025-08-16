import React from "react";

const Header = () => {
  const handleViewMenu = () => {
    const menuSection = document.getElementById('food-display');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto rounded-lg overflow-hidden mt-4 sm:mt-8">
      {/* Image */}
      <img
        src="/header_img.png"
        alt="Header Background"
        className="w-full h-auto object-center rounded-lg"
      />

      {/* Overlay text container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center text-white bg-black bg-opacity-40">
        <h2
          className="opacity-0 font-outfit font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 animate-fadeUp"
          style={{ animationDelay: '0.1s' }}
        >
          Order your favourite food here
        </h2>
        <p
          className="opacity-0 mb-4 sm:mb-6 max-w-xs sm:max-w-md lg:max-w-xl text-xs sm:text-sm md:text-base animate-fadeUp"
          style={{ animationDelay: '0.3s' }}
        >
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining experience,
          one delicious meal at a time.
        </p>
        <div
          className="opacity-0 w-full flex justify-center animate-fadeUp"
          style={{ animationDelay: '0.5s' }}
        >
          <button 
            onClick={handleViewMenu}
            className="font-outfit bg-white bg-opacity-70 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-800 transition-colors text-sm sm:text-base"
          >
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
