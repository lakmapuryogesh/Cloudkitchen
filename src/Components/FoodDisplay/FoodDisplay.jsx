import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list, getFilteredFoodList, searchQuery } = useContext(StoreContext);

  // Use filtered food list if there's a search query, otherwise use original food list
  const baseFoodList = searchQuery ? getFilteredFoodList() : food_list;

  const filteredFoods = category === "All"
    ? baseFoodList
    : baseFoodList.filter(item => item.category === category);

  return (
    <div className='mt-6 sm:mt-8 lg:mt-10 w-full text-left' id='food-display'>
      <h2 className='font-outfit font-bold text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6'>
        {searchQuery ? `Search results for "${searchQuery}"` : 'Top dishes near you'}
      </h2>
      {filteredFoods.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">
            {searchQuery ? `No items found for "${searchQuery}"` : 'No items available in this category'}
          </p>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default FoodDisplay;
