import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    valueFrom: -Infinity,
    valueTo: Infinity,
    isChecked: false
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setValueFrom: (state, action) => {
            state.valueFrom = action.payload;
            if (action.payload === '') state.valueFrom = -Infinity;
        },
        setValueTo: (state, action) => {
            state.valueTo = action.payload;
            if (action.payload === '') state.valueTo = Infinity;
        },
        setDiscount: (state, action) => {
            state.isChecked = action.payload;
        }
    }
})

export const { setValueFrom, setValueTo, setDiscount } = filterSlice.actions;

export const selectValue = (state) => state.filter;

export default filterSlice.reducer;