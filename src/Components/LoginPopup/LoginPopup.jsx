import React,{useState} from 'react'
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin}) => {
  const [currState,setCurrState]=useState("Login");
  return (
    <div className='fixed inset-0 z-[9999] bg-black bg-opacity-60 text-white grid'>
      <form className='place-self-center w-[max(80vw,330px)] sm:w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] p-[25px_30px] rounded-[8px] text-[14px] animate-fadeIn'>
        <di className='flex flex-row justify-between items-center'>
          <h2 className='font-bold text-black text-xl'>{currState}</h2>
          <img className='w-4 h-4 cursor-pointer'onClick={()=>setShowLogin(false)} src={assets.cross_icon}></img>
        </di>
        <div className='flex flex-col gap-5'>
          {currState==='Login'?<></>: <input type='text' className="border border-gray-400 rounded px-3 py-2" placeholder='Your Name' required></input>}
         
           <input type='email' className="border border-gray-400 rounded px-3 py-2"  placeholder='Your email' required></input>
            <input type='password' className="border border-gray-400 rounded px-3 py-2 mt-2"  placeholder='Password' required></input>
        </div>
        <button className="text-white border-gray-400 rounded px-3 py-2  bg-tomato cursor-pointer" >{currState==='Sign Up'?"Create account":"Login"}</button>
        <div className='flex flex-row items-start gap-2 '>
          <input type="checkbox" className='cursor-pointer mt-1'required></input>
          <p className='-mt-0.5'>By contain,I agree to the terms of use & privacy policy.</p>
        </div>
        {currState==='Login'?
        <p className=''>Create a new account?<span className='text-sm text-tomato cursor-pointer' onClick={()=>setCurrState("Sign Up")}>Click here</span> </p>
        :<p className=''>Already have a account? <span className='text-sm text-tomato cursor-pointer' onClick={()=>setCurrState("Login")}>Login here</span></p>
          }
        </form>
    </div>
  )
}

export default LoginPopup
