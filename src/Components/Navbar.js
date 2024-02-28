import React, { useState, useContext } from 'react'
import logo from '../Assets/Logo.svg'
import { MenuOptions } from '../Datas/NavbarData';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
        <div className="nav-logo-contain">
            <a href="/">
                <img src={logo} alt="" />
            </a>
        </div>
        <div className="navbar-links-contain">
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#offer">Offer</a>
            <a href="#testimontial">Testimonials</a>
            <a href="#contact">Contact</a>
        </div>
        <div className={`menu-icon-contain ${openMenu ? "opened" : ""}`} onClick={() => setOpenMenu(!openMenu)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </div>
        <div className={`mobile-menu ${openMenu ? "open" : ""}`}>
                <div className="menu-close-icon-contain" onClick={() => setOpenMenu(!openMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            <div className="mobile-menu-links">
                {MenuOptions.map((option, index) => (
                    <div key={index} className="mobile-menu-link">
                        {option.icon}
                        <a href="">{option.text}</a>
                    </div>
                ))}
            </div>
        </div>
    </nav>
  )
}

export default Navbar