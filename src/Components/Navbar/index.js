import React, { useState } from 'react';
import "./navbar.css";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUsername, setUsername } from '../../Feature/User/userSlice';
const Navbar = () => {
    const userName = useSelector((state) => state.user.username)
    const [newuserName, setnewUsername] = useState("");
    const dispatch = useDispatch();
    const handleSubmitUsername = async () => {
        const response = await fetch(`/api/users/isUser/${newuserName}`)
        const ans = await response.json();
        if (ans) {
            dispatch(setUsername(newuserName));
        } else {
            alert("no such user exist in out database");
        }
    }
    const handlelogout = () => {
        dispatch(clearUsername());
    }
    const handleUsername = (e) => {
        setnewUsername(e.target.value);
    }
    const location = useLocation();
    const pathName = location.pathname;
    return (
        <nav className='header__class'>
            <img className='logo__leetcode' src='https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png' alt='leetcode logo' />
            <ul className='nav__list'>
                <li>
                    <Link className={pathName === "/" ? "active" : ""} to="/">Home</Link>
                </li>
                <li >
                    <Link className={pathName === "/submitted" ? "active" : ""} to="/submitted">Submitted</Link>
                </li>
                <li >
                    <Link className={pathName === "/revision" ? "active" : ""} to="/revision">For Revision</Link>
                </li>
                <li >
                    <Link className={pathName === "/ai" ? "active" : ""} to="/ai">AI</Link>
                </li>
            </ul>

            {
                userName ? <div className='search-bar'><span className='username'>{userName}</span>
                    <span className='logout' onClick={handlelogout}>Logout</span></div> : <div className="search-bar">
                    <input type="text" placeholder="Enter Username" onChange={(e) => handleUsername(e)} />
                    <button type="submit" onClick={handleSubmitUsername}>Enter</button>
                </div>
            }
        </nav >
    )
}

export default Navbar
