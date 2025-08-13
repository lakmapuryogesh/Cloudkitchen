import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="text-white bg-gray-900 flex flex-col align-middle gap-4 p-10 mt-20" id='footer'>
        <div className='className="w-full grid gap-20'
  style={{ gridTemplateColumns: "2fr 1fr 1fr" }}>
        <div>
            <img className="pb-3"src={assets.logo} alt=""></img>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nam dolores dicta obcaecati atque ad a! Dolores quo voluptas, ipsam vero laudantium, officiis modi ullam, a rem provident quos adipisci qui commodi! At sint numquam, assumenda vel necessitatibus architecto impedit distinctio culpa error qui, minus corrupti, quaerat recusandae aut porro.</p>
            <div className='flex flex-row pt-4 gap-2 cursor-pointer'>
              <img src={assets.facebook_icon} alt=""></img>  
               <img src={assets.twitter_icon} alt=""></img>  
                <img src={assets.linkedin_icon} alt=""></img>  
            </div>
        </div>
        <div>
            <h2 className='font-bold text-xl pt-3'>COMPANY</h2>
            <ul className='pt-3 cursor-pointer'>
                <li>Home</li>
                <li>About</li>
                <li>Delivary</li>
                <li>Privacy policy</li>
            </ul>
        </div>
            <div>
             <h2 className='font-bold text-xl pt-3'>GET IN TOUCH</h2>
             <ul className='pt-3 cursor-pointer'>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
             </ul>
            </div>
            </div>
      <hr></hr>
      <p className='flex justify-center'>Copyright 2025 @ Tomato.com - ALL Right Reserved.</p>      
    </div>
  )
}

export default Footer
