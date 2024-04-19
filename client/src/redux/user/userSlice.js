import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    console: null,
    loading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        singInStart: (state) => {
            (state.loading = true), (state.error = false);
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { singInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
