import React from 'react'
import { IoStar } from "react-icons/io5";
import { BiSolidInjection } from "react-icons/bi";
import { GoCheckCircleFill } from "react-icons/go";


const Choses = () => {
  return (
   <>
   <section>
    <div className="container">
        <div className="chos_main_curt">
            <div className="chosheding flex flex-col  items-center">
                <h1 className='text-[48px] font-normal text-secend_color font-serif'>Why choose us</h1>
                <p className='w-[526px] text-[18px] font-medium text-[#A0A79A] font-sans '>
                SLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </p>
            </div>
        </div>
        <div className="chos_sirvice flex justify-between mt-[60px]">
          <div className="Dermatologist_Tested">
            <IoStar className='w-[35px] h-[35px] text-[#C51605]'></IoStar>
            <h2 className=' font-bold text-[22px] text-secend_color font-sans'>Dermatologist Tested</h2>
            <p className='w-[313px] text-[18px] font-medium text-[#A0A79A]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </p>
          </div>
          <div className="Dermatologist_Tested">
            <BiSolidInjection className='w-[35px] h-[35px] text-[#C51605]'></BiSolidInjection>
            <h2 className=' font-bold text-[22px] text-secend_color font-sans'>Dermatologist Tested</h2>
            <p className='w-[313px] text-[18px] font-medium text-[#A0A79A]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </p>
          </div>
          <div className="Dermatologist_Tested">
            <GoCheckCircleFill className='w-[35px] h-[35px] text-[#C51605]'></GoCheckCircleFill>
            <h2 className=' font-bold text-[22px] text-secend_color font-sans'>Dermatologist Tested</h2>
            <p className='w-[313px] text-[18px] font-medium text-[#A0A79A]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </p>
          </div>
        </div>
        
    </div>
    </section></>
  )
}

export default Choses