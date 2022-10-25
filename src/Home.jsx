import { useState, useReducer, useEffect, useRef } from "react";
import SpellTell from "./Box/SpellTell";






function Home() {
    return (
        <div className="main">

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



        </div>
    )
}

export default Home

