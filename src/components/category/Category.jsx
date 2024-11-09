import { useSelector } from 'react-redux';

import cl from './Category.module.css';

import ProductItem from '../productItem/ProductItem';
import Filter from '../filter/Filter';

import { selectProducts } from '../../features/products/productsSlice';
import { selectCategoryTitle } from '../../features/catalog/catalogSlice';
import { selectValue } from '../../features/filter/filterSlice';

function Category() {
    const products = useSelector(selectProducts);
    const categoryTitle = useSelector(selectCategoryTitle);
    const { valueFrom, valueTo, isChecked } = useSelector(selectValue);

    return (
        <section className={cl.section}>
            <nav className={cl.nav}>
                <a href="#" className={`${cl.link} ${cl.linkMain}`}>Главная</a>
                <svg className={cl.arrowIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z" fill="#414141" />
                </svg>
                <a href="#" className={`${cl.link}  ${cl.linkCatalog}`}>Каталог</a>
                <svg className={cl.arrowIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z" fill="#414141" />
                </svg>
                <a href="#" className={`${cl.link} ${cl.linkMilk}`}>Молоко, сыр, яйцо</a>
            </nav>
            <h2 className={cl.categoryTitle}>
                {categoryTitle}
            </h2>
            <Filter />
            <div className={cl.productList}>
                {products.map((
                    {
                        category,
                        id,
                        image,
                        favorite,
                        discount,
                        regularPrice,
                        regularPriceDescrip,
                        priceWidthCard,
                        priceWidthCardDescrip,
                        title,
                        starsRating
                    }) => {
                    if (categoryTitle === category &&
                        parseFloat(valueFrom) <= parseFloat(regularPrice) &&
                        parseFloat(valueTo) >= parseFloat(regularPrice) &&
                        (!isChecked || discount)) {
                        return <ProductItem key={id}
                    id={id}
                    image={image}
                    favorite={favorite}
                    discount={discount}
                    regularPrice={regularPrice}
                    regularPriceDescrip={regularPriceDescrip}
                    priceWidthCard={priceWidthCard}
                    priceWidthCardDescrip={priceWidthCardDescrip}
                    title={title}
                    starsRating={starsRating}
                />
                    }
                })}
            </div>
            <ul className={cl.pagination}>
                <li className={cl.paginationItem}>
                    <a href="#">
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.35355 0.646447C6.54882 0.841709 6.54882 1.15829 6.35355 1.35355L1.70711 6L6.35355 10.6464C6.54882 10.8417 6.54882 11.1583 6.35355 11.3536C6.15829 11.5488 5.84171 11.5488 5.64645 11.3536L0.646447 6.35355C0.451184 6.15829 0.451184 5.84171 0.646447 5.64645L5.64645 0.646447C5.84171 0.451184 6.15829 0.451184 6.35355 0.646447Z" fill="#414141" />
                        </svg>
                    </a>
                </li>
                <li className={cl.paginationItem}>
                    <a href="#">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.35355 0.646447C7.54882 0.841709 7.54882 1.15829 7.35355 1.35355L1.70711 7L7.35355 12.6464C7.54882 12.8417 7.54882 13.1583 7.35355 13.3536C7.15829 13.5488 6.84171 13.5488 6.64645 13.3536L0.646447 7.35355C0.451184 7.15829 0.451184 6.84171 0.646447 6.64645L6.64645 0.646447C6.84171 0.451184 7.15829 0.451184 7.35355 0.646447Z" fill="#414141" />
                        </svg>
                    </a>
                </li>
                <li className={cl.paginationItem}><a className={cl.paginationLink} href="#">1</a></li>
                <li className={cl.paginationItem}><a className={cl.paginationLink} href="#">2</a></li>
                <li className={cl.paginationItem}><a className={cl.paginationLink} href="#">3</a></li>
                <li className={cl.paginationItem}><a className={cl.paginationLink} href="#">4</a></li>
                <li className={cl.paginationItem}><a className={cl.paginationLink} href="#">5</a></li>
                <li className={cl.paginationItem}><a className={cl.paginationLink} href="#">6</a></li>
                <li className={cl.paginationItem}><a className={cl.paginationLink} href="#">7</a></li>
                <li className={cl.paginationItem}><a className={cl.paginationLink} href="#">8</a></li>
                <li className={cl.paginationItem}>
                    <a href="#">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#414141" />
                        </svg>
                    </a>
                </li>
                <li className={cl.paginationItem}>
                    <a href="#">
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.64645 0.646447C7.84171 0.451184 8.15829 0.451184 8.35355 0.646447L13.3536 5.64645C13.5488 5.84171 13.5488 6.15829 13.3536 6.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536C7.45118 11.1583 7.45118 10.8417 7.64645 10.6464L12.2929 6L7.64645 1.35355C7.45118 1.15829 7.45118 0.841709 7.64645 0.646447Z" fill="#414141" />
                        </svg>
                    </a>
                </li>
            </ul>
        </section>

    )
}

export default Category;