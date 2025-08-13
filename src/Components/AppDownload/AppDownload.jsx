import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='mt-10 text-center font-bold text-3xl flex flex-col justify-center align-middle'>
      <p>For Better Experience Dowanload <br />Tomato App</p>
      <div className='flex justify-center align-middle mt-4 gap-10'>
        <img className="cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105" src={assets.play_store} alt=""></img>
         <img className="cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105"  src={assets.app_store} alt=""></img>
      </div>
    </div>
  )
}

export default AppDownload
