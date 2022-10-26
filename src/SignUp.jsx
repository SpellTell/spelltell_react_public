import React from 'react'
import { useContext } from 'react';
import MenuContext from './MenuContext';
import logo from './img/logos/logo-spelltell.png';
import { Link } from 'react-router-dom';

function SignUp() {
    const mc = useContext(MenuContext);
    return (
        <div className='main' onClick={() => { mc.setIsOpen(false) }}>
            <div className="container split">
                <div className="page column">
                    <h2>Be first to use full version of SpellTell</h2>
                    <div className="cta-box">
                        <h2>"Smart way to grow"</h2>
                    </div>

                    <p><img className="img-fluid logo" src={logo} alt="" /> is an educational app that is still in development. If you want to add your email to the waiting list for SpellTell, please write us at hello@<img className="img-fluid logo" src={logo} alt="" />.com.
                    </p>
                    <p><img className="img-fluid logo" src={logo} alt="" /> Team, <br />
                        Happy spelling!</p>

                </div>
            </div>

            <div className="container text-center start-learning" style={{ paddingBottom: "120px" }}>
                <h3 className="learn-with">Start learning with <span><img
                    className="img-fluid" alt="learning to spell with SpellTell"
                    src={logo} /></span>
                    for free. </h3>
                <Link to="/#spelltellBox">
                    <div className="learn-with-button">
                        Start Learning
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default SignUp