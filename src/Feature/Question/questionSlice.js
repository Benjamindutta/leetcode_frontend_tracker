import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../MIsc/Helpers";
const initialState = {
    solvedQuestions: [],
    revisionQuestions: [],
    loading: false,
    error: null
}

export const getSolvedQuestions = createAsyncThunk("getsolvedQuestions", async (userid, { rejectWithValue }) => {
    const response = await fetch(`${BASE_URL}/api/users/solvedquestions/${userid}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    try {
        const solvedQuestion = await response.json();
        return solvedQuestion;
    } catch (error) {
        return rejectWithValue(error);
    }
})
export const getRevisionQuestion = createAsyncThunk('getRevisionQuestion', async (userid, { rejectWithValue }) => {
    const response = await fetch(`${BASE_URL}/api/users/revisionquestions/${userid}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    try {
        const revisionQuestion = await response.json();
        return revisionQuestion;
    } catch (error) {
        return rejectWithValue(error);
    }
})
const questionSlice = createSlice({
    name: "questions",
    initialState,
    extraReducers: {
        [getSolvedQuestions.pending]: (state) => {
            state.loading = true;
        },
        [getSolvedQuestions.fulfilled]: (state, action) => {
            state.loading = false;
            state.solvedQuestions = action.payload;
        },
        [getSolvedQuestions.error]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [getRevisionQuestion.pending]: (state) => {
            state.loading = true;
        },
        [getRevisionQuestion.fulfilled]: (state, action) => {
            state.loading = false;
            state.revisionQuestions = action.payload;
        },
        [getRevisionQuestion.error]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    }
})


export default questionSlice.reducer;