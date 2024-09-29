import React from 'react'
import CountUp from 'react-countup';

const Comoncount = ({counicon, countnumber, Comma, Plus, counText}) => {
  return (
    <div className="single_count ">
      <div className=" count_number flex items-center gap-[6px] ">
        <div className='text-3xl text-[#F2994A]'>{counicon}</div>
      <CountUp className='text-[32px] font-bold font-sans text-secend_color' end={countnumber} />
      <p className='text-[32px] font-bold font-sans text-secend_color' >{Comma} {Plus}</p>
      </div>
      <p className='text-[18px] font-sans font-normal text-[#A0A79A] pl-[34px]'>{counText}</p>
    </div>
  )
}

export default Comoncount