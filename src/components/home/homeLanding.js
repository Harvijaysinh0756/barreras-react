import React from 'react'

export default function homeLanding() {
  return (
    <section className="landing-section">
        <div className="landing-content">
            <div className="landing-video-content">
                <video autoPlay muted loop playsInline preload="metadata" src="assets/images/Abama Resort.mp4" poster="../assets/images/landing.png" width="100%" className="landing-video"></video>
            </div>
            <div className="landing-tbas-content">
                <div className="container">
                    <div className="landing-serach">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active ps-0" id="buy-tab" data-bs-toggle="tab" data-bs-target="#buy" type="button" role="tab" aria-controls="buy" aria-selected="true">BUY</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="sell-tab" data-bs-toggle="tab" data-bs-target="#sell" type="button" role="tab" aria-controls="sell" aria-selected="false">SELL</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="rent-tab" data-bs-toggle="tab" data-bs-target="#rent" type="button" role="tab" aria-controls="rent" aria-selected="false">RENT</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="buy" role="tabpanel" aria-labelledby="buy-tab">
                                <div className="landing-tab">
                                    <div className="landing-tab-serachbox position-relative">
                                        <input type="text" className="form-control" placeholder="Search by address, city, Landmark" />
                                        <div className="landing-serach-img">
                                            <a href="/" className="btn landing-serach-btn"><img src="assets/images/serach.png" alt="" className="img-fluid" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="sell" role="tabpanel" aria-labelledby="sell-tab">
                                <div className="landing-tab">
                                    <div className="landing-tab-serachbox position-relative">
                                        <input type="text" className="form-control" placeholder="Search by address, city, Landmark" />
                                        <div className="landing-serach-img">
                                            <a href="/" className="btn landing-serach-btn"><img src="assets/images/serach.png" alt="" className="img-fluid" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="rent" role="tabpanel" aria-labelledby="rent-tab">
                                <div className="landing-tab">
                                    <div className="landing-tab-serachbox position-relative">
                                        <input type="text" className="form-control" placeholder="Search by address, city, Landmark" />
                                        <div className="landing-serach-img">
                                            <a href="/" className="btn landing-serach-btn"><img src="assets/images/serach.png" alt="" className="img-fluid" /></a>
                                        </div>
                                    </div>
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
