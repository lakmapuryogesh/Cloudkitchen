import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  const handleSocialMediaClick = (platform) => {
    const urls = {
      facebook: 'https://www.facebook.com/tomato',
      twitter: 'https://www.twitter.com/tomato',
      linkedin: 'https://www.linkedin.com/company/tomato'
    };
    window.open(urls[platform], '_blank');
  };

  const handleContactClick = (type) => {
    if (type === 'phone') {
      window.location.href = 'tel:+1-212-456-7890';
    } else if (type === 'email') {
      window.location.href = 'mailto:contact@tomato.com';
    }
  };

  const handleCompanyLinkClick = (link) => {
    switch(link) {
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'about':
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'delivery':
        // You can add delivery information modal or page here
        alert('Delivery information: We deliver within 30 minutes in your area!');
        break;
      case 'privacy':
        // You can add privacy policy modal or page here
        alert('Privacy Policy: Your data is safe with us. We never share your personal information.');
        break;
      default:
        break;
    }
  };

  return (
    <div className="text-white bg-gray-900 flex flex-col items-center gap-6 sm:gap-8 p-6 sm:p-8 lg:p-10 mt-16 sm:mt-20" id='footer'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20'>
        <div className="text-center md:text-left">
            <img className="pb-3 w-24 sm:w-32 mx-auto md:mx-0" src={assets.logo} alt="Logo"></img>
            <p className="text-sm sm:text-base leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nam dolores dicta obcaecati atque ad a! Dolores quo voluptas, ipsam vero laudantium, officiis modi ullam, a rem provident quos adipisci qui commodi! At sint numquam, assumenda vel necessitatibus architecto impedit distinctio culpa error qui, minus corrupti, quaerat recusandae aut porro.</p>
            <div className='flex flex-row justify-center md:justify-start pt-4 gap-3 sm:gap-4'>
              <img 
                className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition-transform" 
                src={assets.facebook_icon} 
                alt="Facebook"
                onClick={() => handleSocialMediaClick('facebook')}
              />  
               <img 
                className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition-transform" 
                src={assets.twitter_icon} 
                alt="Twitter"
                onClick={() => handleSocialMediaClick('twitter')}
              />  
                <img 
                className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition-transform" 
                src={assets.linkedin_icon} 
                alt="LinkedIn"
                onClick={() => handleSocialMediaClick('linkedin')}
              />  
            </div>
        </div>
        <div className="text-center md:text-left">
            <h2 className='font-bold text-lg sm:text-xl lg:text-2xl pt-3'>COMPANY</h2>
            <ul className='pt-3 space-y-2 text-sm sm:text-base'>
                <li 
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                  onClick={() => handleCompanyLinkClick('home')}
                >
                  Home
                </li>
                <li 
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                  onClick={() => handleCompanyLinkClick('about')}
                >
                  About
                </li>
                <li 
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                  onClick={() => handleCompanyLinkClick('delivery')}
                >
                  Delivery
                </li>
                <li 
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                  onClick={() => handleCompanyLinkClick('privacy')}
                >
                  Privacy policy
                </li>
            </ul>
        </div>
            <div className="text-center md:text-left">
             <h2 className='font-bold text-lg sm:text-xl lg:text-2xl pt-3'>GET IN TOUCH</h2>
             <ul className='pt-3 space-y-2 text-sm sm:text-base'>
                <li 
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                  onClick={() => handleContactClick('phone')}
                >
                  +1-212-456-7890
                </li>
                <li 
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                  onClick={() => handleContactClick('email')}
                >
                  contact@tomato.com
                </li>
             </ul>
            </div>
            </div>
      <hr className="w-full border-gray-700"></hr>
      <p className='flex justify-center text-center text-sm sm:text-base'>Copyright 2025 @ Tomato.com - ALL Right Reserved.</p>      
    </div>
  )
}

export default Footer
