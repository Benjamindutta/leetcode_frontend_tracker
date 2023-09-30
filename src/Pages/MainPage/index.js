import React, { useEffect } from 'react'
import "./main.css"
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
const MainPage = () => {
    const loggedIn = useSelector((state) => state.user.isLoggedIn);

    return (
        <>
            <div>Main Page</div>
        </>
    )
}

export default MainPage
