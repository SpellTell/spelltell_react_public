import React from 'react'
import { useContext } from 'react';
import MenuContext from './MenuContext';
import logo from './img/logos/logo-spelltell.png';
import { Link } from 'react-router-dom';

function SignUp() {
    const mc = useContext(MenuContext);
    const emailForm = '<iframe width="540" height="850" src="https://d48d886b.sibforms.com/serve/MUIEAFpBY2HJzLc37JF2DH9jeB3EmPAIbUCAFq1VhRTjwM8L6sSw_vsEpno17kLBN4Jv2jf9SgdOwvhFMPGVSBskTe3Bt2N2S0UfC9Js9WHFb78qowVG26WXEscXkavOKpeSXmYnHq1JgvJ7ICKi-OaVmC3ZLYzbFeKdLo5oy0GWSy57KZa8wOJ9ej6QNuyr9c-c2RmQ4afaY3ta" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>';
    return (
        <div className='main' onClick={() => { mc.setIsOpen(false) }}>
            <div className="container split">
                <div className="page column">
                    <div className="cta-box">
                        <h2>"Smart way to grow"</h2>
                    </div>
                    {<div dangerouslySetInnerHTML={{ __html: emailForm }} />}
                </div>
            </div>

        </div>
    )
}

export default SignUp