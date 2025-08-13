import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({ id, name, description, price, image, category }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="flex flex-col items-start space-y-2 w-[260px]">
      <div className="relative m-auto rounded-[15px] shadow-[0_0_10px_rgba(0,0,0,0.08)] transition duration-300 w-full animate-fadeIn overflow-hidden">
        <img src={image} alt={name} className="w-full h-40 object-cover" />

        {/* White add icon at top-right over image */}
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt="Add"
            onClick={() => addToCart(id)}
            className="absolute bottom-[2px] right-[15px] w-10 h-10 cursor-pointer rounded-full z-10"
          />
        ) : <div className="absolute bottom-[2px] right-[15px] flex items-center space-x-2 bg-white rounded-full px-3 py-1 z-10 shadow">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove"
              className="cursor-pointer w-6 h-6"
            />
            <p className="font-semibold">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add"
              className="cursor-pointer w-6 h-6"
            />
          </div>
}

        <div className="flex justify-between px-2 mt-2 items-center">
          <p className="font-semibold text-xl">{name}</p>
          <img
            className="w-20 h-auto object-contain"
            src={assets.rating_starts}
            alt="rating"
          />
        </div>

        <p className="text-gray-500 px-2 my-5">{description}</p>
        <p className="font-bold text-xl text-tomato px-2 mb-2">${price}</p>
      </div>
    </div>
  );
};


export default FoodItem;
