import React from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom';
import Footer from "./components/Footer.jsx"
import Menu from "./components/Menu.jsx"


function SharedLayout() {
    return (
        <>
            <Menu />
            <Outlet />
            <Footer />
        </>
    )
}

export default SharedLayout