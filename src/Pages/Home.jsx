import React from 'react'
import Baner from '../Components/Baner/Baner'
import Navbar from '../Components/Navbar/Navbar'
import Choses from '../Components/Choose/Choses'
import Handwash from '../Components/Handwash/Handwash'
import Mensday from '../Components/Mensday/Mensday'
import Menslip from '../Components/Menslip/Menslip'
import Review from '../Components/Review/Review'

const Home = () => {
  return (
  <>
  <Baner></Baner>
  <Choses></Choses>
  <Handwash></Handwash>
  <Mensday></Mensday>
  <Menslip></Menslip>
  <Review></Review>
 
  </>
   
  )
}

export default Home