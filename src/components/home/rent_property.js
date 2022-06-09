import React from 'react'

export default function rent_property() {
  return (
    <section className=" p-rent-section p-sell-section ">
        <div className=" container ">
            <div className=" p-buy-content p-rent-content ">
                <div className=" p-buy-details shadow ">
                    <h2 className=" p-buy-details-title section-title ">
                        Rent your property with us
                    </h2>
                    <p className=" p-buy-details-discription section-discription ">Whether you are looking to rent your first home, or seeking a property management service, we will help you understand the process, and get all the facts!</p>
                    <a href="/" className=" btn btn-dark p-buy-btn p-rent-btn">Buy on Rent Now</a>
                </div>
                <div className=" p-buy-video-content ">
                    <img src="assets/images/rent.png" alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    </section>
  )
}
