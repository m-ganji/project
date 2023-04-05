import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    systemSelector: "",
    systemSelectorLatLon: "",
    buttonSituation: "",
};

export const counterSlice = createSlice({
    name: "system",
    initialState,
    reducers: {
        handleButtonSituation: (state, action) => {
            state.buttonSituation = action.payload;
        },
        SystemHandler: (state, action) => {
            state.systemSelector = action.payload;
        },
        SystemHandlerLatLon: (state, action) => {
            state.systemSelectorLatLon = action.payload;
        }
    },
});

export const {
    handleButtonSituation,
    SystemHandler,
    SystemHandlerLatLon,
} = counterSlice.actions;

export default counterSlice.reducer;
