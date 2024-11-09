import cl from './ProductInfo.module.css';

function ProductInfo() {
    return (
        <section className={cl.productInfo}>
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z" fill="#414141" />
                </svg>
                <a href="#" className={`${cl.link} ${cl.linkOil}`}>Масло ПРОСТОКВАШИНО</a>
            </nav>
            <h2 className={cl.ProductInfoTitle}>
                Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г
            </h2>
            <div className={cl.swiper}>

            </div>
            <div className={cl.info}>
                <div className={cl.priceContainer}>
                    <div className={cl.priceRegular}>
                        <p className={cl.priceRegularValue}>100 ₽</p>
                        <p className={cl.priceRegularLabel}>Обычная цена</p>
                    </div>
                    <div className={cl.priceDiscount}>
                        <p className={cl.priceDiscountValue}>50 ₽</p>
                        <p className={cl.priceDiscountLabel}>Цена со скидкой</p>
                    </div>
                </div>
                <button className={cl.buttonInBasket}>
                    В корзину
                </button>
                <div className={cl.description}>
                    <p className={cl.productBrand} > Бренд: Простоквашино</p>
                    <p className={cl.productCountry}>Страна производства: Россия</p>
                    <p className={cl.productWeight}>Вес: 180 г</p>
                </div>
            </div>
        </section >
    )
}

export default ProductInfo;