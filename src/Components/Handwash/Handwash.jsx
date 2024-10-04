import React from 'react'
import CountUp from 'react-countup';
import { HiMiniCube } from "react-icons/hi2";
import Comoncount from '../../Comon/Comoncount';
import { HiCube } from "react-icons/hi2";
import Comonbutton from '../../Comon/Comonbutton';




const Handwash = () => {
  return (
    <>
      <section className=' bg-[#ECEBE6]'>
        <div className="container">
          <div className="handwash_singlecurt flex justify-between mt-[121px]">

          <div className="count">
            <p className='text-icon_color font-pt font-normal mt-[194px] '>All skins types</p>
           <div className="count_number flex justify-between gap-[80px] mt-[78px]">
           <Comoncount counicon={<HiCube/>} countnumber={48} counText={'Products'}  />
            <Comoncount counicon={<HiCube/>} countnumber={200} Plus={'+'} counText={'Product solds'}/>
            <Comoncount counicon={<HiCube/>} countnumber={99}  Plus={'+'} counText={'Review'}/>
           </div>
           <h1 className='text-[36px] font-pt font-normal text-brand_color pt-[40px]'>Men’s Hand wash  lorem</h1>
         <div className="button flex items-center mt-[49px] gap-5">
         <Comonbutton/>
         <p className='text-[31px] font-pt font-normal text-brand_color'>৳ 700</p>
         </div>
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