import { createSlice } from '@reduxjs/toolkit';
import { getCookie, removeCookie, setJwt } from '../../MIsc/Helpers';



const isAuthenticated = () => {
    let storedUser = localStorage.getItem('user');
    if (!storedUser) {
        return false;
    }
    storedUser = JSON.parse(storedUser);

    let jwtcookie = getCookie('j_w_t');
    if (!jwtcookie) {
        return false;
    }

    // if user has token expired
    if (Date.now() > storedUser.exp * 1000) {
        return false;
    }
    return true;
}

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null, // Get the username from localStorage if it exists
    token: getCookie('j_w_t') || '',
    isloggedIn: isAuthenticated()
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload)); // Save the username to localStorage
        },
        clearUser: (state) => {
            state.user = null;
            localStorage.removeItem('user'); // Remove the username from localStorage
        },
        setToken: (state, action) => {
            state.token = action.payload;
            setJwt('j_w_t', action.payload.accessToken, action.payload.exp);
        },
        removeToken: (state) => {
            state.token = '';
            removeCookie('j_w_t');
        },
        LoggedIn: (state) => {
            state.isloggedIn = true;
        },
        LoggedOut: (state) => {
            state.isloggedIn = false;
        }
    },
});

export const { setUser, clearUser, setToken, removeToken, LoggedIn, LoggedOut } = userSlice.actions;

export default userSlice.reducer;