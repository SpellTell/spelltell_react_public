import React from 'react'
import whiteLogo from '../img/logos/logo-spelltell-white.png'

function Footer() {
  return (
    <footer>
    <div className='container split'>

        <div className="basis33 column">
            <h3>You need only 3.000 words to write with confidence</h3>
            <p> In English, 3000 words make approximately 95% of daily communication. This means that you will be
                able
                to communicate properly after you learned only 3000 base words. Words in our word bank are ordered
                by
                their frequency in the English language. Once you mastered those 3000 high frequency words you will
                be
                able to write much more confidently. We apply "80/20 rule" to help you to learn much faster and more
                productively. Read more about the <a
                    href="https://blog.hubspot.com/marketing/pareto-principle">"80/20
                    rule"</a>. </p>
        </div>
        <div className="basis33 column">
            <h3>The smartest way to learn</h3>
            <p> Do you know how to spell "Zurich"? Some people don't know even what Zurich is, others live in
                Zurich,
                Switzerland. Why would we bombard people from Switzerland with the spelling of their home city? They
                even
                know to use "ü" to write "Zürich". Same goes for thousands of other words. If you know how to spell
                "handkerchief ", even though it's a tough word to spell, <img class="img-fluid white-inline-logo"
                    src={whiteLogo} alt="Logo of SpellTell"/> will not bother you with it
                more than it should. On the other hand, if you
                can't spell "money", it will serve you this word more frequently than any other. The more you
                practice,
                the more our algorithm is optimized to your personal needs. </p>
        </div>
        <div className="basis33 column">
            <h3>You can feel that you are learning</h3>
            <p>Remember those pesky old <a href="https://en.wikipedia.org/wiki/Flashcard">flash cards</a>
                from school. If only you could have some sort of database for them. 😊 Well... you would be very
                happy to
                hear about our weekly reports. We like to measure everything, and we think you should do it too. Our
                weekly reports include the words you have learned in a current week and the number of all words in
                your
                word bank. Our users reported this to be the highest motivating factor for improving their
                vocabulary
                with  <img className="img-fluid white-inline-logo" src={whiteLogo}
                    alt="Logo, spelltell.com" />.
            </p>
        </div>

    </div>
    <div id="under-footer" className="under-footer">
        <div className="container split ">
            <div className="basis50 column">
                <p>Copyright © <img className="img-fluid white-inline-logo"
                        alt="White Logo of SpellTell"
                        src={whiteLogo} />
                </p>
            </div>
            <div className="basis50 column">
                <ul className="list-inline quicklinks">
                    <li className="list-inline-item">
                        <a href="contact.html">
                            <p>Contact</p>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/privacy-policy.html">
                            <p>Privacy Policy</p>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/privacy-policy.html">
                            <p>Terms of Use</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer