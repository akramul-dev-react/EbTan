import React from 'react'
import CountUp from 'react-countup';
import { HiMiniCube } from "react-icons/hi2";

const Handwash = () => {
  return (
    <>
    <section>
       <div className="container">
       <div className="handwash_singlecurt flex justify-between bg-[#ECEBE6] mt-[121px]">

            <div className="handwash_count pt-[205px] flex justify-between">
                <p className=' text-[20px] font-normal text-[#F2994A] font-sans '>All skins types</p>
                <div className="handwshcounter flex">
                <HiMiniCube className='w-6 h-6 text-[#F2994A] mt-[10px] ga-[10px]' />
                <CountUp className='text-[32px] font-bold text-secend_color font-sans' end={48} />
                </div>
                <p className=' text-[18px] font-normal font-sans text-[#A0A79A] ml-[25px]'>Products</p>

                <div className="handwshcounter flex">
                <HiMiniCube className='w-6 h-6 text-[#F2994A] mt-[10px] ga-[10px]' />
                <CountUp className='text-[32px] font-bold text-secend_color font-sans' end={200} />
                </div>
                <p className=' text-[18px] font-normal font-sans text-[#A0A79A] ml-[25px]'>Products</p>

                <div className="handwshcounter flex">
                <HiMiniCube className='w-6 h-6 text-[#F2994A] mt-[10px] ga-[10px]' />
                <CountUp className='text-[32px] font-bold text-secend_color font-sans' end={99} />
                </div>
                <p className=' text-[18px] font-normal font-sans text-[#A0A79A] ml-[25px]'>Products</p>

            </div>
            <div className="hanwash_img pt-[110px]">
                <img src="Imeges/wash.png" alt="handwashpic" />
            </div>
        </div>
       </div>
    </section>





    </>
  )
}

export default Handwash