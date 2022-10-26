import { useState, useReducer, useEffect, useRef } from "react";
import SpellTell from "./Box/SpellTell";

import step1 from './img/steps/step1.png';
import logo from './img/logos/logo-spelltell.png';
import step2 from './img/steps/step2.png';
import step3 from './img/steps/step3.png';
import report from './img/features/report.png';
import adapt from './img/features/adapt.png';
import compare from './img/features/compare.png';
import { useContext } from 'react';
import MenuContext from './MenuContext';




function Home() {
    const mc = useContext(MenuContext);
    return (
        <div className="main" onClick={()=>{mc.setIsOpen(false)}}>

            <div className="container text-center ">
                <h1>Improve Your <span>Spelling</span></h1>
                <div className="subheadline">
                    <h2>Thousands of adults have improved their spelling
                        in just <strong style={{color:"rgb(111, 0, 255)"}}> 7 days.</strong> <br />
                        <strong style={{color:"rgb(0, 128, 92)"}}> No registration</strong> needed,
                            just start typing to start practicing!<br></br>
                    </h2>
                </div>
            </div>

            <SpellTell />


            <div>
            <div id="howitworks" className="container split">
                <div className="basis100 column">
                    <h2>How It Works</h2>
                </div>

                <div className="basis33 column step-item">
                    <img className="img-fluid lazyloaded" alt="First step , singing up"
                        src={step1}/>
                    <div className="portfolio-caption">
                        <p className="circle">1</p>
                        <p className="text-muted">Firstly, <span><a href="/signup.php">Sing up</a> to <span
                                    className="spellTellAlgorithm"><img className="img-fluid logo"
                                        src={logo} alt="Spell Tell Logo"/></span> with your email address
                                and
                                chosen password.</span></p>
                    </div>
                </div>



                <div className="basis33 column step-item">
                    <img className="img-fluid lazyloaded"
                        alt="Second step, practicing spelling" src={step2}/>
                    <div className="portfolio-caption">
                        <p className="circle">2</p>
                        <span className="arrow"></span>
                        <p className="text-muted">Start practicing while <span className="spellTellAlgorithm"><img
                                    className="img-fluid logo" src={logo} alt=""/></span>
                            algorithm
                            tracks your progress and adapts new learning methods. </p>
                    </div>
                </div>

                <div className="basis33 column step-item">
                    <img className="img-fluid lazyloaded"
                        alt="Third step, downloading reports" src={step3}/>
                    <div className="portfolio-caption">
                        <p className="circle">3</p>
                        <span className="arrow"></span>
                        <p className="text-muted"> Get regular weekly reports about your progress or dowload it at any
                            time
                            from
                            your
                            wordbank.</p>
                    </div>
                </div>
            </div>
        </div>




        <div className="container ">
            <div className="cta-box">
                <h2>Masterting your <strong>spelling</strong> has never been easier.</h2>
            </div>
        </div>



        <section id="features">
            <div className="container">
                <div className="split">

                    <div className="basis100 column">
                        <h2>What Makes A Difference</h2>
                    </div>

                    <div className="basis33 column feature">
                        <div><span className="feature-image">
                                <img className="img-resp" alt="Reporting email" src={report}/>
                            </span>
                            <h4>Reporting </h4>
                            <p className="fls text-muted">A weekly report will be generated to help you track your
                                learning
                                progress.</p>
                        </div>
                        <div className="button">
                            <a href="#under-footer"><button type="button" aria-label="Read more button"
                                    className="btn btn-outline-primary">Read more</button></a>

                        </div>
                    </div>



                    <div className="basis33 column feature">
                        <div><span className="feature-image">
                                <img className="img-resp" alt="Adaptive algorithms" src={adapt}/>
                            </span>
                            <h4>Adaptive algorithms </h4>
                            <p className="fls text-muted">Smart algoritams are personalizing the experience to best fit
                                your
                                brain's learing
                                cycle.</p>
                        </div>
                        <div className="button">
                            <a href="#under-footer"><button type="button" aria-label="Read more button"
                                    className="btn btn-outline-primary">Read more</button></a>

                        </div>
                    </div>


                    <div className="basis33 column feature">
                        <div><span className="feature-image">
                                <img className="img-resp" alt="Compare" src={compare}/>
                            </span>
                            <h4>Compare </h4>
                            <p className="text-muted">Comapring your history records will motivate you to learn even
                                faster.</p>
                        </div>
                        <div className="button">
                            <a href="#under-footer"><button type="button" aria-label="Read more button"
                                    className="btn btn-outline-primary">Read more</button></a>

                        </div>
                    </div>
                </div>
            </div>
        </section>


        <div className="container text-center start-learning" style={{paddingBottom:"120px"}}>
            <h3 className="learn-with">Start learning with <span><img
                        className="img-fluid" alt="learning to spell with SpellTell"
                        src={logo}/></span>
                for free. </h3>
            <a href="#spelltellBox">
                <div className="learn-with-button">
                    Start Learning
                </div>
            </a>
        </div>



        </div>
    )
}

export default Home

