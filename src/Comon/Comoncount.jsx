import React from 'react'
import { IoStar } from "react-icons/io5";
import CountUp from 'react-countup';

const Comoncount = () => {
  return (
    <div className="single_count ">
      <div className="flex gap-[6px]  count_icon text-3xl text-[#F2994A] mt-[42px] ">
      <IoStar />
      <div className="count_number">
      <CountUp className='text-[32px] font-bold text-secend_color' end={} />
      <p className='text-[18px] font-normal text-[#A0A79A]'>{Comma} {Plus}</p>
      </div>
      </div>
    </div>
  )
}

export default Comoncount