import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import cl from './Favorites.module.css'

import ProductItem from "../productItem/ProductItem";

import { selectProducts } from "../../features/products/productsSlice";
import { selectAuth } from "../../features/auth/authSlice";

function Favorites() {
    const products = useSelector(selectProducts);
    const { values } = useSelector(selectAuth);

    let favoriteProducts = products.filter(product => product.favorite.includes(values.login))

    return (
        <div className={cl.favorite}>
            {favoriteProducts.map(product => {
                return <ProductItem key={nanoid()}
                    id={product.id}
                    image={product.image}
                    favorite={product.favorite}
                    discount={product.discount}
                    regularPrice={product.regularPrice}
                    regularPriceDescrip={product.regularPriceDescrip}
                    priceWidthCard={product.priceWidthCard}
                    priceWidthCardDescrip={product.priceWidthCardDescrip}
                    title={product.title}
                    starsRating={product.starsRating}
                />
            })}
        </div>
    )
}

export default Favorites;