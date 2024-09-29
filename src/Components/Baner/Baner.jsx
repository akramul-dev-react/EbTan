import React from 'react'
import Comonhed from '../../Comon/Comonhed'
import Comonbutton from '../../Comon/Comonbutton'
import Comoncount from '../../Comon/Comoncount'
import { IoStar } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { FaFaceFrown } from "react-icons/fa6";
import CountUp from 'react-countup';


const Baner = () => {
  return (
    <>
   <section className='benar pt-[97px]'>
    <div className="container">
        <div className="baner_row flex  items-center gap-[72px]">
            <div className="baner_img mt-[173px]">
                <img src="Imeges/benar.png" alt="benarmg" />
            </div>
          <div className="bener_text">
            <Comonhed Comonhedtext='Normal to oily skin'/>
            <h1 className='w-[540px] font-normal font-serif text-[72px]  text-secend_color my-5'>
            Men’s Sunscreen
            hand & body
            </h1>
            <p className='w-[526px] text-lg font-sans font-normal text-[#A0A79A]' >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </p>
            <Comonbutton/>
         <div className='flex mt-[31px] gap-[49px]'>
            <Comoncount counicon={<IoStar/>}countnumber={4} Comma={','} Plus={6} counText={'Rating'} />
            <Comoncount counicon={<FaBagShopping/>}countnumber={200}Plus={'+'} counText={'Product solds'} />
            <Comoncount counicon={<FaFaceFrown/>}countnumber={99}Plus={'+'} counText={'Review'} />
         </div>
          
          </div>

        </div>
    </div>

   </section>
    </>
  )
}

export default Baner