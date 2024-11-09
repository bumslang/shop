import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    users: [
        {
            login: 'admin',
            pass: '1'
        },
        {
            login: 'yura',
            pass: '1'
        }
    ],
    
    passIsCorrect: true,
    values: {
        login: 'admin',
        pass: '1'
    },
    authWindowIsVisible: false,
    // passIsCorrect: null,
    // values: {
    //     login: '',
    //     pass: ''
    // },
    // authWindowIsVisible: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        showAuthWindow: (state, action) => {
            state.authWindowIsVisible = action.payload;
        },
        resetPass: (state, action) => {
            state.passIsCorrect = action.payload;
        },
        changeValueLogin: (state, action) => {
            state.values.login = action.payload;
        },
        changeValuePass: (state, action) => {
            state.values.pass = action.payload;
        },
        submitLogin: (state, action) => {
            const userExists = state.users.some(user =>
                user.login === action.payload.login && user.pass === action.payload.pass
            );

            if (userExists) {
                state.passIsCorrect = true;
                state.authWindowIsVisible = false;
            } else {
                state.passIsCorrect = false;
            }
        }
    }
});

export const {
    showAuthWindow,
    resetPass,
    changeValueLogin,
    changeValuePass,
    submitLogin,
} = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
