import React from 'react';
import "./navbar.css";
import leet_img from "../../media/leet_img.png"
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {

    const location = useLocation();
    const pathName = location.pathname;
    return (
        <nav className='header__class'>
            <img className='logo__leetcode' src={leet_img} alt='leetcode logo' />
            <ul className='nav__list'>
                <li>
                    <Link className={pathName === "/" ? "active" : ""} to="/">Home🏠</Link>
                </li>
                <li >
                    <Link className={pathName === "/submitted" ? "active" : ""} to="/submitted">Submitted✅</Link>
                </li>
                <li >
                    <Link className={pathName === "/revision" ? "active" : ""} to="/revision">Revision🔁</Link>
                </li>
                <li >
                    <Link className={pathName === "/ai" ? "active" : ""} to="/ai">qGPT🤖</Link>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar
