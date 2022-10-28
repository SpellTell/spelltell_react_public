import React from 'react'
import { useContext } from 'react';
import MenuContext from './MenuContext';
import logo from './img/logos/logo-spelltell.png';
import { Link } from 'react-router-dom';







function ButWhy() {
  const mc = useContext(MenuContext);
  return (
    <div className='main' onClick={() => { mc.setIsOpen(false) }}>



      <div className="container split">
        <div className="page column">
          <h2>
            <span style={{fontSize:"24px"}}> We have decided! It's free</span>
            <br/> SpellTell is free for all humans <br /> and their pets</h2>




          <p>  Have a keyboard cat🐈 lying around? It's free for her too! Grandmas? Yes! Mother-in-law? Yes, why not? Dogs? Woof!
            <br />
</p>
<p>But why we have made it free?</p>
          <h3 style={{textAlign:"left", fontSize:"24px", fontWeight:"400"}}>- Because your better life should not wait for us to find time to finish this app! </h3>

          <p>I moved to an English-speaking country a few years ago. My career was going at a steady pace and I liked my job. There was only one thing that was giving me headaches: Spelling.
          </p>
          <p>I never had time to sit and practice.</p>
          <p>I had to choose whether to sit and practice my spelling or sit and read about management. Having been recently promoted to a managerial position, my choice was obvious. I had to be good at understanding people rather than words and sentences. </p>
          <p>This is why I put my English education on a back burner. </p>
        <p> Sometimes, I would make a funny mistake that would make my whole team laugh.</p>

        <p>For example. When I was hiring new web devs, I usually started with <strong>breadth‍💨</strong> interviews. But, you know, if I felt hungry I would sometimes start <strong>bread🍞</strong> interviews. My boss was always a bit worried that I would eat the candidates instead of hiring them.</p>

          <p>This is why I made <img className="img-fluid logo" src={logo} alt="" />'s first version completely free. Practice now, and thank us later.
          </p>
          <p>Will the full version be paid? <br />
          Yes. To keep improving this app, we will make a full version commercial. Servers are expensive, and we also want to be able to hire some experts eventually. Although, I don't expect this amazing app will cost you more than a good frappuccino. </p>

          <p>For everyone who would like to contribute to our endeavors, you can <a href="https://www.buymeacoffee.com/spelltell">fix us a frappuccino</a>  right now 😊.</p>
          <p> Marko Rodic (<a href="https://xdmr.us/" target="_blank" rel="noopener noreferrer">➔ say Hi</a>) , <br />
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

export default ButWhy