import React from 'react'
import "./navbar.css"
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
    const location = useLocation();
    console.log(location.pathname);
    const pathName = location.pathname;
    return (
        <header className='header__class'>
            <img className='logo__leetcode' src='https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png' alt='leetcode logo' />
            <nav >
                <ul className='nav__list'>
                    <li>
                        <Link className={pathName == "/" ? "active" : ""} to="/">Submitted</Link>
                    </li>
                    <li >
                        <Link className={pathName == "/revision" ? "active" : ""} to="/revision">For Revision</Link>
                    </li>
                </ul>
            </nav>
            <span className='username'>Username</span>
        </header >
    )
}

export default Navbar
