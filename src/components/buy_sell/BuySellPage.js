import React from 'react'
import LandingSection from './LandingSection'
import BuyFilter from './BuyFilter'
import Property from './Property'

export default function BuySellPage() {
  return (
    <>
        <LandingSection landingTitle="Properties for sale"></LandingSection>
        <BuyFilter></BuyFilter>
        <Property></Property>
    </>
  )
}
