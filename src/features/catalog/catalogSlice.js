import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    categories: [
        {
            categoryName: 'Молоко, сыр, яйцо',
            categoryLink: 'milk',
            categoryClass: 'milk'
        },
        {
            categoryName: 'Хлеб',
            categoryLink: 'bread',
            categoryClass: 'bread'
        },
        {
            categoryName: 'Фрукты и овощи',
            categoryLink: 'fruits',
            categoryClass: 'fruits'
        },
        {
            categoryName: 'Замороженные продукты',
            categoryLink: 'iceProducts',
            categoryClass: 'iceProducts'
        },
        {
            categoryName: 'Напитки',
            categoryLink: 'drinks',
            categoryClass: 'drinks'
        },
        {
            categoryName: 'Кондитерские изделия',
            categoryLink: 'confectionery',
            categoryClass: 'confectionery'
        },
        {
            categoryName: 'Чай и кофе',
            categoryLink: 'tea',
            categoryClass: 'tea'
        },
        {
            categoryName: 'Бакалея',
            categoryLink: 'grocery',
            categoryClass: 'grocery'
        },
        {
            categoryName: 'Здоровое питание',
            categoryLink: 'healthyFoods',
            categoryClass: 'healthyFoods'
        },
        {
            categoryName: 'Зоотовары',
            categoryLink: 'zoo',
            categoryClass: 'zoo'
        },
        {
            categoryName: 'Детское питание',
            categoryLink: 'kidsFoods',
            categoryClass: 'kidsFoods'
        },
        {
            categoryName: 'Мясо, птица, колбаса',
            categoryLink: 'meat',
            categoryClass: 'meat'
        },
        {
            categoryName: ' Непродовольственные товары',
            categoryLink: 'nonFoodProducts',
            categoryClass: 'nonFoodProducts'
        },
    ],
    categoryTitle: localStorage.getItem('categoryTitle'),
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setCategoryTitle: (state, action) => {
            localStorage.setItem('categoryTitle', action.payload);
            state.categoryTitle = localStorage.getItem('categoryTitle');
        }
    }
})

export const { setCategoryTitle } = catalogSlice.actions

export const selectCategoryTitle = (state) => state.catalog.categoryTitle;
export const selectCatalog = (state) => state.catalog.categories;

export default catalogSlice.reducer