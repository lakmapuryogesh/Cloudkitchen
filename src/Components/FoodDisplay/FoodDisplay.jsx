import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredFoods = category === "All"
    ? food_list
    : food_list.filter(item => item.category === category);

  return (
    <div className='mt-6 sm:mt-8 lg:mt-10 w-full text-left' id='food-display'>
      <h2 className='font-outfit font-bold text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6'>Top dishes near you</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
        {filteredFoods.map(item => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodDisplay;
