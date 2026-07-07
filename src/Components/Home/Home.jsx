import React from 'react'
import SliderWelcome from './SliderWelcome.jsx'
import Testimonial from '../Home/Testimonial.jsx'
import InfoHoney from '../Home/InfoHoney.jsx'
import FacebookPost from '../Home/FacebookPost.jsx'
import Founder from '../Home/Founder.jsx'


const Home = () => {
  return (
    <>
    <SliderWelcome/>
    <Founder/>
    <Testimonial/>
    <InfoHoney/>
    <FacebookPost/>
    </>
  )
}

export default Home