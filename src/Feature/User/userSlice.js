import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: localStorage.getItem('username') || '', // Get the username from localStorage if it exists
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
            localStorage.setItem('username', action.payload); // Save the username to localStorage
        },
        clearUsername: (state) => {
            state.username = '';
            localStorage.removeItem('username'); // Remove the username from localStorage
        },
    },
});

export const { setUsername, clearUsername } = userSlice.actions;

export default userSlice.reducer;