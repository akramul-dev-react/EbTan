import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

const Comonbutton = () => {
  return (
    <button className='flex items-center gap-4 py-[13px] px-[35px] bg-brand_color text-lg font-medium font-sans text-[#fff] rounded-[5px] mt-[71px]' >
        <FaCartShopping />Add to cart</button>
  )
}

export default Comonbutton