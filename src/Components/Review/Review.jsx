import React from 'react'
import { IoStar } from "react-icons/io5";


const Review = () => {
  return (
    <>
    <section>
        <div className="container">
         <div className="revewheding flex flex-col justify-center items-center mt-[142px]">
         <h2 className=' text-[48px] text-brand_color font-normal font-pt'> Review</h2>
        <div className="revewtext justify-center">
        <p className=' w-[526px] text-[18px] text-[#A0A79A] font-pt'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </p>
        </div>
         </div>
         <div className="revew flex justify-center gap-[105px]">

          <div className="revewOne">
           <div className="icon text-[41px] text-icon_color flex justify-center gap-[25px] mt-[90px] ">
            <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><IoStar />
           </div>

         <div className="revewcontent flex flex-col items-center justify-center">
         <p className='w-[441px] text-]20px] text-brand_color font-normal font-pt my-[13px]'>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
           </p>
           <h3 className=' text-[36px] text-secend_color font-normal font-pt'>Ebrahim Ahmed</h3>
           <p className=' text-[20px] text-icon_color font-normal font-pt'>actor</p>
         </div>
          </div>

          <div className="revewOne">
           <div className="icon text-[41px] text-icon_color flex justify-center gap-[25px] mt-[90px] ">
            <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><IoStar />
           </div>

         <div className="revewcontent flex flex-col items-center justify-center">
         <p className='w-[441px] text-]20px] text-brand_color font-normal font-pt my-[13px]'>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
           </p>
           <h3 className=' text-[36px] text-secend_color font-normal font-pt'>Ebrahim Ahmed</h3>
           <p className=' text-[20px] text-icon_color font-normal font-pt'>actor</p>
         </div>
          </div>
         </div>
        
        </div>
    </section>
    
    </>
  )
}

export default Review