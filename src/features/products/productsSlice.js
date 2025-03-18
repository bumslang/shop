import { createSlice } from "@reduxjs/toolkit";

import BlinImage from '../../images/products/blin.png';

let initialState = [
    {
        category: 'Молоко, сыр, яйцо',
        id: 1,
        image: BlinImage,
        favorite: [],
        discount: '',
        regularPrice: '50 P',
        regularPriceDescrip: 'Обычная',
        priceWidthCard: '45 P',
        priceWidthCardDescrip: 'C картой',
        title: 'Яйца',
        starsRating: {
            admin: 5,
            ura: 3,
            tre: 4,
            fdg: 3,
            k: 4
        },

    },
    {
        category: 'Молоко, сыр, яйцо',
        id: 2,
        image: BlinImage,
        favorite: [],
        discount: '-50%',
        regularPrice: '60 P',
        regularPriceDescrip: 'Обычная',
        priceWidthCard: '55 P',
        priceWidthCardDescrip: 'C картой',
        title: 'Молоко',
        starsRating: {
            ura: 3,
            tre: 4,
            fdg: 3,
            k: 4
        },
    },
    {
        category: 'Молоко, сыр, яйцо',
        id: 3,
        image: BlinImage,
        favorite: [],
        discount: '-50%',
        regularPrice: '70 P',
        regularPriceDescrip: 'Обычная',
        priceWidthCard: '65 P',
        priceWidthCardDescrip: 'C картой',
        title: 'Сыр',
        starsRating: {
            admin: 5,
            fdg: 3,
            k: 4
        },
    },
    {
        category: 'Хлеб',
        id: 4,
        image: BlinImage,
        favorite: [],
        discount: '',
        regularPrice: '30 P',
        regularPriceDescrip: 'Обычная',
        priceWidthCard: '25 P',
        priceWidthCardDescrip: 'C картой',
        title: 'Хлеб',
        starsRating: {
            admin: 5,
            k: 4
        },
    },
    {
        category: 'Молоко, сыр, яйцо',
        id: 5,
        image: BlinImage,
        favorite: [],
        discount: '-50%',
        regularPrice: '80 P',
        regularPriceDescrip: 'Обычная',
        priceWidthCard: '75 P',
        priceWidthCardDescrip: 'C картой',
        title: 'Сыр',
        starsRating: {
            tre: 4,
            fdg: 3,
            k: 4
        },
    },
    {
        category: 'Хлеб',
        id: 6,
        image: BlinImage,
        favorite: [],
        discount: '',
        regularPrice: '10 P',
        regularPriceDescrip: 'Обычная',
        priceWidthCard: '5 P',
        priceWidthCardDescrip: 'C картой',
        title: 'Батон',
        starsRating: {
            fdg: 3,
            k: 4
        },
    },
]

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setFavorite: (state, action) => {
            state.forEach(product => {
                if (product.id === action.payload.id && !product.favorite.includes(action.payload.login)) {
                    product.favorite.push(action.payload.login)
                } else if (product.id === action.payload.id && product.favorite.includes(action.payload.login)) {
                    product.favorite = product.favorite.filter(user => user !== action.payload.login)
                }
            })
        },
        setRating: (state, action) => {
            state.forEach(product => {
                if (product.id === action.payload.productId) {
                    product.starsRating = { ...product.starsRating, [action.payload.user]: action.payload.grade };
                }
            })
        }
    }
})
export const { setFavorite, setRating } = productsSlice.actions

export const selectProducts = (state) => state.products;

export default productsSlice.reducer;

