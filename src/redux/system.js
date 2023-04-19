import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    buttonSituation: "",
    systemSelector: false,
    systemSelectorDegree: "",
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
        systemHandlerDegree: (state, action) => {
            state.systemSelectorDegree = action.payload;
        },
    },
});

export const {
    handleButtonSituation,
    systemHandler,
    systemHandlerDegree,
} = counterSlice.actions;

export default counterSlice.reducer;
