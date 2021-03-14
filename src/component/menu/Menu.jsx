import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';

function Menu() {
    const [data, setData] = useState('');
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header-inr clearfix">
                                <div className="hdr-lft">
                                    <div className="logo">
                                        <a href="#"><img src={logo} alt="images" /></a>
                                    </div>
                                </div>
                                <div className="hdr-rgt">
                                    <div className="hdr-rgt-innr clearfix">
                                        <div className="hdr-rgt-date hide-sm">
                                            <a href="#">Saturday- Thursday 10:00 AM - 6:00 PM</a>
                                        </div>
                                        <div className="hdr-login-cntlr clearfix">
                                            <div className="hdr-login-register">
                                                <ul className="clearfix reset-list">
                                                    <li><a href="#">Register Free</a></li>
                                                    <li><a href="#">Log In</a></li>
                                                </ul>
                                            </div>
                                            <div className="nav-opener" onClick={() => setData("opacity-1")}>
                                                <div className="opener-inner">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`burger-menu burger-menu1 clearfix ${data}`}>
                <div className="burger-main-menu-inr clearfix">
                    <div className="burger-login-register-tp">
                        <div className="burger-main-close" onClick={() => setData(" ")}>
                            <a href="#"><i className="fas fa-arrow-right"></i></a>
                        </div>
                        <div className="burger-login-register clearfix">
                            <a href="#">Login</a>
                            <a href="#">Register</a>
                        </div>
                    </div>
                    <div className="burger-main-menu-cntlr clearfix">
                        <div className="burger-main-menu">
                            <ul className="clearfix reset-list">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Active Member</a></li>
                                <li><a href="#">Premium Plans</a></li>
                                <li><a href="#">Happy Stories</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Download App</a></li>
                                <li><a href="#">Media & Press</a></li>
                            </ul>
                        </div>
                        <div className="buger-email-adr">
                            <span><a href="#">Give Us Your Feedback Need any help?</a> Write to us at</span>
                            <a href="mailto:hmweddingsdev@gmail.com ">hmweddingsdev@gmail.com</a>
                        </div>
                        <div className="buger-contact">
                            <span>Call Us On</span>
                            <a href="tel:25881149">(+880) 25881149</a>
                            <a href="tel:1789168581">(+880) 1789168581</a>
                            <a href="tel:1731556712">(+880) 1731556712</a>
                        </div>
                        <div className="burger-socail-icon">
                            <ul className="reset-list clearfix">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fas fa-link"></i></a></li>
                                <li><a href="#"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Menu;