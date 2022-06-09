import React from 'react'
import { NavLink } from 'react-router-dom'
export default function property() {
  return (
    <section className="florence-section">
        <div className="container">
            <div className="florence-content">
                <div className="row">
                    <div className="col col-12 col-md-6 col-lg-6">
                        <div className="florence-item">
                            <div className="florence-img">
                                <img src="assets/images/florence.png" alt="" className="img-fluid" />
                                <div className="florence-details">
                                    <h2 className="florence-title">425 Florence Cath St</h2>
                                    <p className="florence-location section-discription"><i className="bi bi-geo-alt"></i>Location</p>
                                    <div className="florence-bedroom">
                                        <span className="florence-home-item"><img src="assets/images/bed.png" alt="" className="img-fluid" /> 2 Bedroom</span>
                                        <span className="florence-home-item"><img src="assets/images/bath.png" alt="" className="img-fluid" /> 2 Bathroom</span>
                                        <span className="florence-home-item"><img src="assets/images/area.png" alt="" className="img-fluid" /> 130 Area M2</span>
                                    </div>
                                    <NavLink to="/property-details" className="btn btn-dark florence-btn">View</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
