import { configureStore } from '@reduxjs/toolkit';
import questionReducer from '../Feature/Question/questionSlice';
import userReducer from '../Feature/User/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        question: questionReducer
    }
});