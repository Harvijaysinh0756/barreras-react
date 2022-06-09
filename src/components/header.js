import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
        <div className="container">
            <nav className="navbar navbar-expand-xl">
                <div className=" header-content">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact activeClassName='active' className="nav-link" to='buy'>Buy</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName='active' className="nav-link" to='buy'>Rent</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName='active' className="nav-link" to='buy'>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName='active' className="nav-link" to='buy'>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName='active' className="nav-link" to='buy'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink className="navbar-brand header-logo pt-0 pb-0" to="/">
                        <img src="assets/images/logo.png" alt="" className="img-fluid" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icons"></span>
                        <span className="navbar-toggler-icons"></span>
                        <span className="navbar-toggler-icons"></span>
                    </button>
                    <div className="choose-location-content ms-auto">
                        <a href="/" className="choose-location-link">
                            <span><i className="fa-solid fa-location-dot"></i></span>
                            <span>Choose Location</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  )
}
