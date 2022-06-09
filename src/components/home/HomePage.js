import React from 'react'

import HomeLanding from './homeLanding';
import BuyProperty from './buy_property';
import SellProperty from './sell_property';
import RentProperty from './rent_property';
import RentPropertySlider from './rent_property_slider';
import Partnerships from './partnerships';
import Testimonials from './testimonials';


export default function HomePage() {
  return (
    <>
        <HomeLanding></HomeLanding>
        <BuyProperty></BuyProperty>
        <SellProperty></SellProperty>
        <RentProperty></RentProperty>
        <RentPropertySlider></RentPropertySlider>
        <Partnerships></Partnerships>
        <Testimonials></Testimonials>
    </>
  )
}
