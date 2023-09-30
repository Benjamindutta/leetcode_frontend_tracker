import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { parseJwt } from '../MIsc/Helpers';
import { LoggedIn, setToken, setUser } from '../Feature/User/userSlice';
import { useDispatch } from 'react-redux';

const OAuth2Redirect = () => {
    const [redirectTo, setRedirectTo] = useState('/login');
    const dispatch = useDispatch();

    const location = useLocation();
    const extractUrlParam = (key) => {
        return new URLSearchParams(location.search).get(key);
    }

    const handleLogin = (accessToken) => {
        const data = parseJwt(accessToken);
        dispatch(setUser(data));
        dispatch(setToken({ accessToken, exp: data.exp }));
        dispatch(LoggedIn());
    }

    useEffect(() => {
        const accessToken = extractUrlParam('token');
        console.log(accessToken);
        if (accessToken) {
            handleLogin(accessToken);
            const redirect = '/';
            setRedirectTo(redirect);
        }
    }, []);


    return (
        <Navigate to={redirectTo} />
    )
}

export default OAuth2Redirect
