import React,{useSate} from 'react'
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id='explore-menu' className="mt-8 sm:mt-12">
      {/* Heading */}
      <h1 className='font-outfit font-bold text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4'>
        Explore our menu
      </h1>

      {/* Description */}
      <p className='max-w-full sm:max-w-2xl lg:max-w-3xl text-[#0d0101] text-sm sm:text-base lg:text-lg leading-relaxed'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>

      {/* Scrollable Menu */}
      <div className="flex justify-start items-center gap-3 sm:gap-4 lg:gap-6 text-center my-4 sm:my-6 overflow-x-auto explore-menu-list no-scrollbar pb-2">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)
            }
            className="flex-shrink-0"
          >
            <img
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 cursor-pointer rounded-full 
              transition-all duration-200 hover:scale-105 no-scrollbar
              ${category === item.menu_name ? 'ring-4 ring-[tomato] ring-offset-0' : ''}`}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p className='mt-2 text-[#858282] text-xs sm:text-sm lg:text-base font-medium'>{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr className='my-4 sm:my-6 h-[2px] bg-[#e2e2e2] border-none' />
    </div>
  )
}

export default ExploreMenu
