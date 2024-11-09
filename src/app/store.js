import { configureStore, } from "@reduxjs/toolkit";

import productsReducer from "../features/products/productsSlice.js";
import catalogReducer from '../features/catalog/catalogSlice.js';
import filterReducer from '../features/filter/filterSlice.js'
import authReducer from '../features/auth/authSlice.js'
import favoriteReducer from '../features/favorite/favoriteSlice.js'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        catalog: catalogReducer,
        filter: filterReducer,
        auth: authReducer,
        favorite:favoriteReducer,
    },
})

export default store;

