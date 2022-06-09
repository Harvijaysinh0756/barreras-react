import React from 'react'

export default function footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-logo">
                    <a href="/"> <img src="assets/images/logo.png" alt="" className="img-fluid" /></a>
                </div>
                <div className="footer-contact">
                    <a href="/" className="text-decoration-none">
                        <h4 className="footer-location section-discription text-white">
                            <img src="assets/images/location.png" alt="" className="img-fluid" /> Av. Los Abrigos, 32. Los Abrigos. Santa <br /> Cruz de Tenerife. 38618</h4>
                    </a>
                    <div className="footer-social">
                        <a href="/" className="footer-social-insta text-decoration-none">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="/" className="footer-social-facebook text-decoration-none">
                            <i className="fa-brands fa-facebook-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <h5 className="section-discription text-center text-white">© 2022 - All rights reserved</h5>
        </div>
    </footer>
  )
}
