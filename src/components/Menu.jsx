import { useEffect, useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../img/logos/logo-spelltell.png'


function Menu() {
    //Version 2; make it so that side menu width resized with window resize
    // const [padding, setPadding]=useState(window.innerWidth*0.5);
    // useEffect(() => {
    //     function handleResize() {
    //         setPadding( window.innerWidth*0.5)
    //     }
    //     window.addEventListener('resize', handleResize)
    // })


    function openSlideMenu() {
        const padding = (window.innerWidth * 0.5);
        document.getElementById('slide-menu').style.width = padding + "px";
        document.getElementById('slide-menu').style.paddingLeft = `${padding - 200}` + "px";
        //make SpellTell box element move to right when
        //document.getElementById('spelltellBox').style.left = '150px';
    }

    function closeSlideMenu() {
        document.getElementById('slide-menu').style.width = '0';
        document.getElementById('slide-menu').style.paddingLeft = '0px';
        //  document.getElementById('spelltellBox').style.left = '0px';
    }

    return (
        <>
            <div className="navi-logo">
                <Link to="/"><img className="img-resp" src={logo} /></Link>
            </div>

            <div className="navi-container">
                <div className="container">
                    <nav className="navi">
                        <span className="open-slide">
                            <Link to="#" onClick={() => { openSlideMenu() }}>
                                <svg width="30" height="20">
                                    <path d="M0,2 30, 2" stroke="rgb(181, 1, 157)" strokeWidth="2.5"></path>
                                    <path d="M0,10 30, 10" stroke="rgb(181, 1, 157)" strokeWidth="2.5"></path>
                                    <path d="M0, 17.5 30, 17.5" stroke="rgb(181, 1, 157)" strokeWidth="2.5"></path>
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
                <Link id="close-button" to="#" className="btn-close" onClick={() => { closeSlideMenu() }}>

                    <svg width="20" height="20">
                        <path d="M0,0 20, 20" stroke="white" strokeWidth="2"></path>
                        <path d="M0,20 20,  0" stroke="white" strokeWidth="2"></path>
                    </svg>
                </Link>
                <Link to="#">Contact</Link>
                <Link to="#">Sing In</Link>
                <Link to="#">Sign Up</Link>
                <Link to="#">About Us</Link>
            </div>
        </>
    )
}

export default Menu