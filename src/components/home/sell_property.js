import React from 'react'

export default function sell_property() {
  return (
    <section className="p-sell-section">
        <div className="container">
            <div className="p-buy-content p-sell-content">
                <div className="p-buy-details  p-sell-details shadow">
                    <h2 className="p-buy-details-title section-title">
                        Sell your property with us
                    </h2>
                    <p className="p-buy-details-discription section-discription">
                        Whether you're selling for the first time or have sold up and moved on before, we want to make sure that you’re well informed and know exactly what to expect every step of the way.
                    </p>
                    <a href="/" className="btn btn-dark p-buy-btn">Sell Now</a>
                </div>
                <div className="p-buy-video-content p-sell-video-content">
                    <img src="assets/images/sell.png" alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    </section>
  )
}
