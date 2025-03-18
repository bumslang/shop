import { useDispatch, useSelector } from 'react-redux'
import cl from './Stars.module.css'
import { selectProducts, setRating } from '../../features/products/productsSlice'
import { useState } from 'react'
import { selectAuth } from '../../features/auth/authSlice';

function Stars({ starsRating, id }) {
    const dispatch = useDispatch();
    const { values } = useSelector(selectAuth);


    const evaluate = (e, ind) => {
        e.preventDefault();
        dispatch(setRating({ productId: id, user: values.login, grade: ind + 1 }))
    }

    let rating = Math.round(Object.values(starsRating).reduce((sum, num) => {
        return sum + num
    }, 0) / Object.values(starsRating).length)

    const stars = new Array(5).fill(null).map((star, ind) => {
        return (
            <svg onClick={e => evaluate(e, ind)} key={ind} className={cl.star} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.10326 1.81698C7.47008 1.07374 8.52992 1.07374 8.89674 1.81699L10.1185 4.29249C10.2641 4.58763 10.5457 4.7922 10.8714 4.83953L13.6033 5.2365C14.4235 5.35568 14.751 6.36365 14.1575 6.94219L12.1807 8.8691C11.945 9.09884 11.8375 9.42984 11.8931 9.75423L12.3598 12.4751C12.4999 13.292 11.6424 13.9149 10.9088 13.5293L8.46534 12.2446C8.17402 12.0915 7.82598 12.0915 7.53466 12.2446L5.09119 13.5293C4.35756 13.9149 3.50013 13.292 3.64024 12.4751L4.1069 9.75423C4.16254 9.42984 4.05499 9.09884 3.81931 8.8691L1.8425 6.94219C1.24898 6.36365 1.57649 5.35568 2.39671 5.2365L5.12859 4.83953C5.4543 4.7922 5.73587 4.58763 5.88153 4.29249L7.10326 1.81698Z" fill={rating <= ind ? "#BFBFBF" : "#FF6633"} />
            </svg>
        )
    })

    return (
        <div className={cl.stars}>
            {stars}
        </div>
    )
}

export default Stars;