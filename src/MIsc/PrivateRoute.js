import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
    const isLoggedIn = useSelector((state) => state.user.isloggedIn);
    return isLoggedIn ? children : <Navigate to="/login" />
}

export default PrivateRoute