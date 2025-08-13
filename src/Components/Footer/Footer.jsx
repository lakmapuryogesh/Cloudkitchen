import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="text-white bg-gray-900 flex flex-col items-center gap-6 sm:gap-8 p-6 sm:p-8 lg:p-10 mt-16 sm:mt-20" id='footer'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20'>
        <div className="text-center md:text-left">
            <img className="pb-3 w-24 sm:w-32 mx-auto md:mx-0" src={assets.logo} alt="Logo"></img>
            <p className="text-sm sm:text-base leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nam dolores dicta obcaecati atque ad a! Dolores quo voluptas, ipsam vero laudantium, officiis modi ullam, a rem provident quos adipisci qui commodi! At sint numquam, assumenda vel necessitatibus architecto impedit distinctio culpa error qui, minus corrupti, quaerat recusandae aut porro.</p>
            <div className='flex flex-row justify-center md:justify-start pt-4 gap-3 sm:gap-4 cursor-pointer'>
              <img className="w-6 h-6 sm:w-8 sm:h-8" src={assets.facebook_icon} alt="Facebook"></img>  
               <img className="w-6 h-6 sm:w-8 sm:h-8" src={assets.twitter_icon} alt="Twitter"></img>  
                <img className="w-6 h-6 sm:w-8 sm:h-8" src={assets.linkedin_icon} alt="LinkedIn"></img>  
            </div>
        </div>
        <div className="text-center md:text-left">
            <h2 className='font-bold text-lg sm:text-xl lg:text-2xl pt-3'>COMPANY</h2>
            <ul className='pt-3 cursor-pointer space-y-2 text-sm sm:text-base'>
                <li className="hover:text-gray-300 transition-colors">Home</li>
                <li className="hover:text-gray-300 transition-colors">About</li>
                <li className="hover:text-gray-300 transition-colors">Delivery</li>
                <li className="hover:text-gray-300 transition-colors">Privacy policy</li>
            </ul>
        </div>
            <div className="text-center md:text-left">
             <h2 className='font-bold text-lg sm:text-xl lg:text-2xl pt-3'>GET IN TOUCH</h2>
             <ul className='pt-3 cursor-pointer space-y-2 text-sm sm:text-base'>
                <li className="hover:text-gray-300 transition-colors">+1-212-456-7890</li>
                <li className="hover:text-gray-300 transition-colors">contact@tomato.com</li>
             </ul>
            </div>
            </div>
      <hr className="w-full border-gray-700"></hr>
      <p className='flex justify-center text-center text-sm sm:text-base'>Copyright 2025 @ Tomato.com - ALL Right Reserved.</p>      
    </div>
  )
}

export default Footer
