import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: {
        login: null,
    }
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        deleteFromFavorite: (state, action) => {

        }
    }
})

export const { addToFavorite, deleteFromFavorite } = favoriteSlice.actions;

export const selectFavorite = (state) => state.favorite;

export default favoriteSlice.reducer;