import React from 'react'
import Header from '../header'
import LandingSection from '../buy_sell/LandingSection'
import PropertyDetailsSlider from './PropertyDetailsSlider'
import Footer from '../footer'
export default function PropertyDetailsPage() {
  return (
    <>
      <Header></Header>
      <LandingSection landingTitle="425 Florence Cath St"></LandingSection>
      <PropertyDetailsSlider></PropertyDetailsSlider>
      <Footer></Footer>
    </>
  )
}
