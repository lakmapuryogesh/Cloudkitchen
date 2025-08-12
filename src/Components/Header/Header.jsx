import React from "react";

const Header = () => {
  return (
    <div className="relative max-w-7xl mx-auto rounded-lg overflow-hidden mt-8">
      {/* Image */}
      <img
        src="/header_img.png"
        alt="Header Background"
        className="w-full h-auto object-center rounded-lg"
      />

      {/* Overlay text container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-8 text-center text-white bg-black bg-opacity-40">
        <h2
          className="opacity-0 font-outfit font-bold text-3xl sm:text-4xl md:text-5xl mb-4 animate-fadeUp"
          style={{ animationDelay: '0.1s' }}
        >
          Order your favourite food here
        </h2>
        <p
          className="opacity-0 mb-6 max-w-xl text-sm sm:text-base animate-fadeUp"
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
          <button className="font-outfit bg-white bg-opacity-70 text-black px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
