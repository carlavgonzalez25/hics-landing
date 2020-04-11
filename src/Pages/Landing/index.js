import React from 'react'
import Header from './Sections/Header'
import Slider from './Sections/Slider'
import OurServices from './Sections/OurServices'
import Contact from './Sections/Contact'
import Partners from './Sections/Partners'
import Footer from './Sections/Footer'

function Landing() {
  return (
    <div className="Landing">
      <Header />
      <Slider />
      <OurServices />
      <Contact />
      <Partners />
      <Footer />
    </div>
  )
}

export default Landing
