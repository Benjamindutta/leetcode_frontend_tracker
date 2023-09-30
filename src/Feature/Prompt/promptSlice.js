import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    topic: "",
    difficulty: "Easy",
    noOfQuestions: 0
}
const promptSlice = createSlice({
    name: "prompt",
    initialState,
    reducers: {
        setTopic: (state, action) => {
            state.topic = action.payload;
        },
        setDifficulty: (state, action) => {
            state.difficulty = action.payload;
        },
        setnoOfQuestions: (state, action) => {
            state.noOfQuestions = action.payload;
        }
    }

})

export const { setTopic, setDifficulty, setnoOfQuestions } = promptSlice.actions;
export default promptSlice.reducer;