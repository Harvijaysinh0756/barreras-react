import React from 'react'

export default function LandingSection(props) {
  return (
    <>
        <section className="properties-section">
            <div className="container">
                <h1 className="properties-title section-title text-center text-white">{props.landingTitle}</h1>
            </div>
        </section> 
    </>
  )
}

LandingSection.defaultProps = {
  landingTitle: "Page Title"
}