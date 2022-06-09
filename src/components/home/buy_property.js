import React from 'react'

export default function buy_property() {
  return (
    <section className="p-buy-section">
        <div className="container">
            <h2 className="p-buy-title text-center section-main-title">Welcome To The Land Of The Eternal Spring</h2>
            <div className="p-buy-content">
                <div className="p-buy-details shadow">
                    <h2 className="p-buy-details-title section-title">
                        Buy your property with us
                    </h2>
                    <p className="p-buy-details-discription section-discription">Buying a home is a big step and there can be a lot to consider. At Inmobiliaria Barreras we believe it should be one of the most fulfilling experiences of your life.</p>
                    <a href="/" className="btn btn-dark p-buy-btn">Buy Now</a>
                </div>
                <div className="p-buy-video-content">
                    <img src="assets/images/buy.png" alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    </section>
  )
}
