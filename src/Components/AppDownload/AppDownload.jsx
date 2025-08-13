import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='mt-10 sm:mt-16 lg:mt-20 text-center font-bold text-2xl sm:text-3xl lg:text-4xl flex flex-col justify-center items-center'>
      <p className="px-4 sm:px-6">For Better Experience Download <br className="hidden sm:block" />Tomato App</p>
      <div className='flex flex-col sm:flex-row justify-center items-center mt-4 sm:mt-6 gap-4 sm:gap-6 lg:gap-10'>
        <img 
          className="cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 w-32 sm:w-40 lg:w-48" 
          src={assets.play_store} 
          alt="Google Play Store"
        />
        <img 
          className="cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 w-32 sm:w-40 lg:w-48"  
          src={assets.app_store} 
          alt="Apple App Store"
        />
      </div>
    </div>
  )
}

export default AppDownload
