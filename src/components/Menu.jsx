import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../img/logos/logo-spelltell.png'


function Menu() {
    return (
        <>
            <div className="navi-logo">
                <Link to="index.html"><img className="img-resp" src={logo}/></Link>
            </div>

            <div className="navi-container">
                <div className="container">
                    <nav className="navi">
                        <span className="open-slide">
                            <Link to="#" onclick="openSlideMenu()">
                                <svg width="30" height="20">
                                    <path d="M0,2 30, 2" stroke="rgb(181, 1, 157)" stroke-width="2.5"></path>
                                    <path d="M0,10 30, 10" stroke="rgb(181, 1, 157)" stroke-width="2.5"></path>
                                    <path d="M0, 17.5 30, 17.5" stroke="rgb(181, 1, 157)" stroke-width="2.5"></path>
                                </svg>
                            </Link>
                        </span>
                        <ul className="navi-nav">
                            <li><Link className="login" to="#">Log In</Link></li>
                            <li><Link className="signup" to="#">Sign Up</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div id="slide-menu" className="slide-nav">
                <Link id="close-button" to="#" className="btn-close" onclick="closeSlideMenu()">

                    <svg width="20" height="20">
                        <path d="M0,0 20, 20" stroke="white" stroke-width="2"></path>
                        <path d="M0,20 20,  0" stroke="white" stroke-width="2"></path>
                    </svg>
                </Link>
                <a to="#">Contact</a>
                <a to="#">Sing In</a>
                <a to="#">Sign Up</a>
                <a to="#">About Us</a>
            </div>
        </>
    )
}

export default Menu