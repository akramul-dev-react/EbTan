import React from 'react'
import { Link } from 'react-router-dom'
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <section className=' lg:py-6  py-[64px] bg-brand_color'>
        <div className="container">
            <div className="footer_row">
            <h2 className='text-[34px] text-white font-bold font-inter text-center '>EbTan Cosmetics</h2>
            </div>
           
                <ul className='flex justify-center gap-[33px] mt-[43px]'>
                    <li> <Link className='text-[18px] text-[#FFFFFF] font-medium font-inter'>Home</Link> </li>
                    <li> <Link className='text-[18px] text-[#FFFFFF] font-medium font-inter'>About us</Link> </li>
                    <li> <Link className='text-[18px] text-[#FFFFFF] font-medium font-inter'>Product</Link> </li>
                    <li> <Link className='text-[18px] text-[#FFFFFF] font-medium font-inter'>Contact</Link> </li>
                </ul>
                <ul className=' flex justify-center gap-[29px] mt-[50px]'>
                    <li><Link className='text-[30px] text-white' to={'#'}><RiInstagramFill /></Link>  </li>
                    <li><Link className='text-[30px] text-white' to={'#'}><FaTelegram /></Link>  </li>
                    <li><Link className='text-[30px] text-white' to={'#'}><FaFacebook /></Link>  </li>
                </ul>
                <p className='text-[18px] text-[#FFFFFF] font-medium font-inter text-center mt-5'>© 2024 All Rights Reserved.</p>
            
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Footer