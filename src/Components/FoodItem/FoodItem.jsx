import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({ id, name, description, price, image, category }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="flex flex-col items-start space-y-2 w-full">
      <div className="relative m-auto rounded-[15px] shadow-[0_0_10px_rgba(0,0,0,0.08)] transition duration-300 w-full animate-fadeIn overflow-hidden">
        <img src={image} alt={name} className="w-full h-32 sm:h-36 md:h-40 lg:h-44 object-cover" />

        {/* White add icon at top-right over image */}
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt="Add"
            onClick={() => addToCart(id)}
            className="absolute bottom-2 right-3 sm:bottom-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 cursor-pointer rounded-full z-10"
          />
        ) : <div className="absolute bottom-2 right-3 sm:bottom-3 sm:right-4 flex items-center space-x-1 sm:space-x-2 bg-white rounded-full px-2 sm:px-3 py-1 z-10 shadow">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove"
              className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6"
            />
            <p className="font-semibold text-sm sm:text-base">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add"
              className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6"
            />
          </div>
}

        <div className="flex justify-between px-3 sm:px-4 mt-2 sm:mt-3 items-center">
          <p className="font-semibold text-lg sm:text-xl lg:text-2xl">{name}</p>
          <img
            className="w-16 h-auto sm:w-20 object-contain"
            src={assets.rating_starts}
            alt="rating"
          />
        </div>

        <p className="text-gray-500 px-3 sm:px-4 my-3 sm:my-4 text-sm sm:text-base line-clamp-2">{description}</p>
        <p className="font-bold text-lg sm:text-xl lg:text-2xl text-tomato px-3 sm:px-4 mb-3 sm:mb-4">${price}</p>
      </div>
    </div>
  );
};


export default FoodItem;
