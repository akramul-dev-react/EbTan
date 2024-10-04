import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import Comonbutton from '../../Comon/Comonbutton';

const Menslip = () => {
  return (
    <>
    <section>
      <div className="container">
        <div className="crem-maincurt flex justify-between mt-[155px]">

        <div className="cremtext">
          <p className='text-[20px] text-[#F2994A] font-normal font-pt mt-[100px]'>Only skins types</p>
          <h2 className=' w-[479px] text-[48px] text-secend_color font-normal font-pt'>
          Men's lip balm lasting 
          (25 gr)
          </h2>
         <div className="menicon flex items-center">
         <IoMdArrowDropdown className=' text-[22px] '/>
         <p className=' text-[22px] text-secend_color font-semibold font-inter'>How to use</p>
         </div>
         <div className="menicon flex items-center">
         <IoMdArrowDropdown className=' text-[22px] '/>
         <p className=' text-[22px] text-secend_color font-semibold font-inter'>Ingredients</p>
         </div>
         <div className="menicon flex items-center">
         <IoMdArrowDropdown className=' text-[22px] '/>
         <p className=' text-[22px] text-secend_color font-semibold font-inter'>Benefits</p>
         </div>
        <div className="mensbutton flex items-center gap-[27px] mt-[37px]">
        <Comonbutton/>
        <p className=' text-[30px] text-brand_color font-pt font-normal '>৳ 500</p>
        </div>
        </div>

        <div className="cremimg">
          <img src="Imeges/Ebtan.png" alt="cremi" />
        </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Menslip