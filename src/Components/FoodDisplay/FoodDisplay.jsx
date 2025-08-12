import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredFoods = category === "All"
    ? food_list
    : food_list.filter(item => item.category === category);

  return (
    <div className='mt-6 w-full text-left' id='food-display'>
      <h2 className='font-outfit font-bold text-2xl mb-4'>Top dishes near you</h2>
      <div className=' grid
    grid-cols-[repeat(auto-fill,minmax(240px,1fr))]
    mt-[30px]
    gap-x-[30px]
    gap-y-[50px]'>
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
