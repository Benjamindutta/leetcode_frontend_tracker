import React from 'react';
import "./navbar.css";
import leet_img from "../../media/leet_img.png"
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoggedOut, clearUser, removeToken } from '../../Feature/User/userSlice';
const Navbar = () => {

    const isLoggedIn = useSelector((state) => state.user.isloggedIn);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(removeToken());
        dispatch(LoggedOut());
        dispatch(clearUser());
    }

    const location = useLocation();
    const pathName = location.pathname;
    return (
        <nav className='header__class'>
            <img className='logo__leetcode' src={leet_img} alt='leetcode logo' />

            {
                isLoggedIn ? <ul className='nav__list'>
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
                        <Link className={pathName === "/ai" ? "active" : ""} to="/ai">O(n)GPT🤖</Link>
                    </li>
                    <li> <span className="logout" onClick={() => logout()}>Logout🔒</span></li>

                </ul>
                    : <ul className='nav__list'>
                        <li>
                            <Link className={pathName === "/login" ? "active" : ""} to="/login">Login 🔓</Link>
                        </li>
                    </ul>
            }
        </nav >
    )
}

export default Navbar
