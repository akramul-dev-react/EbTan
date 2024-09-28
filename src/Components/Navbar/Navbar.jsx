import React, { useState } from 'react'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link } from 'react-router-dom';



const Navbar = () => {
    // ========coustom stat part
    const [show , setshow ] = useState(false)


    // ===funtion=====
    const handleshow = ()=>{
       setshow(!show)
    }
  return (
   <>
 <nav className='menu pt-[33px]'>
    <div className="container">
        <div className="menu_row flex justify-between ">
            <div className="logocoll">
                <img src="Imeges/logo.png" alt="logo" />
            </div>
            <div className="menu_icon  relative">
            <HiOutlineMenuAlt2 onClick={handleshow} className='text-3xl active:text-brand_color rotate-180'/>
            {
                show&&
            <ul className='w-[300px] bg-green-700 flex flex-col rounded-[10px] gap-2 items-center p-5 absolute top-[30px ] right-0'>
                <li><Link to='/' className='text-xl font-semibold text-white font-inter'>About us</Link></li>
                <li><Link to='/' className='text-xl font-semibold text-white font-inter'>Product</Link></li>
                <li><Link to='/' className='text-xl font-semibold text-white font-inter'>Contact</Link></li>
                <li><Link to='/' className='text-xl font-semibold text-white font-inter'>Home</Link></li>
            </ul>
            
        }
            </div>
        </div>
    </div>
 </nav>
   </>
  )
}

export default Navbar