import React from 'react'
import Comonhed from '../../Comon/Comonhed'
import Comonbutton from '../../Comon/Comonbutton'

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
            <Comonhed Comonhedtext='Normal to oily skin'></Comonhed>
            <h1 className='w-[540px] font-normal font-serif text-[72px]  text-secend_color my-5'>
            Men’s Sunscreen
            hand & body
            </h1>
            <p className='w-[526px] text-lg font-sans font-normal text-[#A0A79A]' >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </p>
            <Comonbutton></Comonbutton>
          
          </div>

        </div>
    </div>

   </section>
    </>
  )
}

export default Baner