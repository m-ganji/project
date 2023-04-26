import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    buttonSituation: "",
};

export const counterSlice = createSlice({
    name: "system",
    initialState,
    reducers: {
        handleButtonSituation: (state, action) => {
            state.buttonSituation = action.payload;
        },
        systemHandler: (state, action) => {
            state.systemSelector = action.payload;
        },
        
    },
});

export const {
    handleButtonSituation,
    systemHandler,
} = counterSlice.actions;

export default counterSlice.reducer;
