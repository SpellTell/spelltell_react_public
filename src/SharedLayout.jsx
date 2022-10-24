import React from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom';
import Footer from "./components/Footer.jsx"


function SharedLayout() {
    return (
        <>
            {/* everything around outlet will be shown to eveery child inse of this Route */}
            <Outlet />
            <h3>
                <NavLink to="/">Home</NavLink> <> | </>
                <NavLink style={({ isActive }) => { return { color: isActive ? 'red' : 'black' } }} to="/about">About</NavLink> <> | </>
                <NavLink to="/dev">Dev</NavLink>
            </h3>
            <h5>
                <Link to="/">Home</Link> <> - </>
                <Link to="/about">About</Link> <> - </>
                <Link to="/devMarko/FrontEnd">Dev:Marko</Link>
            </h5>
            <Footer/>
        </>
    )
}

export default SharedLayout