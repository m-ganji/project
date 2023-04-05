import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    systemSelector: "",
    systemSelectorLatLon: "",
};

export const counterSlice = createSlice({
    name: "system",
    initialState,
    reducers: {
        SystemHandler: (state, action) => {
            state.systemSelector = action.payload;
        },
        SystemHandlerLatLon: (state, action) => {
            state.systemSelectorLatLon = action.payload;
        }
    },
});

export const {
    SystemHandler,
    SystemHandlerLatLon,
} = counterSlice.actions;

export default counterSlice.reducer;
