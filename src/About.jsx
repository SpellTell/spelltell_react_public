import React from 'react'
import { useContext } from 'react';
import MenuContext from './MenuContext';
import logo from './img/logos/logo-spelltell.png';
import { Link } from 'react-router-dom';







function About() {
  const mc = useContext(MenuContext);
  return (
    <div className='main' onClick={() => { mc.setIsOpen(false) }}>



      <div className="container split">
        <div className="page column">
          <h2>About Us</h2>
          <div className="cta-box">
            <h2>"Smart way to grow"</h2>
          </div>



          <p>  SpellTell (<img className="img-fluid logo" src={logo} alt="" />) is an educational app that helps adults improve their spelling. <img className="img-fluid logo" src={logo} alt="" /> is imagined to be a quick and easy way to practice spelling whenever a user can find a spare minute. Exercises can be done while on mobile or desktop devices. If you are waiting for a bus, commuting, or waiting for your Zoom host to start a meeting, you can open <img className="img-fluid logo" src={logo} alt="" /> and go over a couple of dozen words. This is an amazing way to always upgrade your spelling skill level. </p>

          <p>Learning with <img className="img-fluid logo" src={logo} alt="" /> can also be very intensive. You can use it for hours, for multiple days in a row. People who use <img className="img-fluid logo" src={logo} alt="" /> intensively are usually motivated by the possibility of close promotion, or they may be moving to a new country, starting a new coledge course, or simply wanting to bulletproof their spelling.
          </p>
          <p><img className="img-fluid logo" src={logo} alt="" /> is an educational app that is still in development. If you want to contribute or if you have found a mistake in our material, please write us at hello@<img className="img-fluid logo" src={logo} alt="" />.com
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

export default About