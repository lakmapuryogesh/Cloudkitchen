import React,{useSate} from 'react'
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id='explore-menu'>
      {/* Heading */}
      <h1 className='font-outfit font-bold text-2xl mb-4 '>
        Explore our menu
      </h1>

      {/* Description */}
      <p className='max-w-[60%] sm:max-w-full text-[#0d0101] text-sm sm:text-base'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>

      {/* Scrollable Menu */}
      <div className="flex justify-start items-center gap-4 sm:gap-6 text-center my-5 overflow-x-auto explore-menu-list no-scrollbar">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)
            }
          >
            <img
              className={`w-20 ml-4 mt-4  md:w-[7.5vw] min-w-[60px] cursor-pointer rounded-full 
              transition-all duration-200 hover:scale-105 no-scrollbar
              ${category === item.menu_name ? 'ring-4 ring-[tomato] ring-offset-0' : ''}`}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p className='mt-2 text-[#858282] text-sm sm:text-base'>{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr className='my-[10px] h-[2px] bg-[#e2e2e2] border-none' />
    </div>
  )
}

export default ExploreMenu
