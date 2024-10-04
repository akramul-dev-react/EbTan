import React from 'react'

const Subscribe = () => {
  return (
    <>
    <section className='bg-[#ECEBE6] mt-[120px]'>
        <div className="container">
            <div className="subscrib_row flex justify-center items-center">
                <div className="subscrib">
                <p className=' w-[356px] py-20 text-[48px] text-secend_color font-normal font-pt'>Subscribe to the 
                daily  <span className=' text-brand_color'>updates</span></p>
                </div>
                <div className=" flex justify-evenly  w-[700px] border-[1px] border-[#A0A79A] rounded-[50px] subscrib_button]">
                    <input type="text" placeholder='Enter your email address' className=' w-[400px]  mx-[24px] bg-transparent text-[18px] text-[#A0A79A] font-medium font-inter' />
                    <button className=' my-5 mx-5 px-6 text-[18px] text-[#FFFFFF] font-medium font-inter py-[13px] bg-brand_color rounded-[30px]'>Subscribe now</button>
                </div>
            </div>
        </div>









    </section>
    
    
    
    
    
    </>
  )
}

export default Subscribe