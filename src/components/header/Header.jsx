import AuthButton from '../authButton/AuthButton';
import cl from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className={cl.header}>
            <NavLink to={`/`} className={cl.name}>
                <svg className={`${cl.logo}`} width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.6689 16.819H4.28623C3.62872 16.819 3.09179 17.3764 3.15209 18.0343C3.84119 25.8488 11.1112 31.9999 19.9776 31.9999C28.844 31.9999 36.1139 25.8517 36.803 18.0343C36.8605 17.3764 36.3264 16.819 35.6689 16.819Z" fill="#FF6633" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.225147 3.33137C1.7887 1.27854 4.60645 0 7.711 0C10.8155 0 13.6333 1.27854 15.1969 3.33137C15.5659 3.81589 15.4714 4.50716 14.9858 4.87537C14.5001 5.24357 13.8073 5.14928 13.4383 4.66476C12.3661 3.25707 10.2569 2.20377 7.711 2.20377C5.16509 2.20377 3.05591 3.25707 1.98374 4.66476C1.6147 5.14928 0.921857 5.24357 0.436236 4.87537C-0.0493858 4.50716 -0.143894 3.81589 0.225147 3.33137Z" fill="#414141" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M24.7671 3.33137C26.3307 1.27854 29.1484 0 32.253 0C35.3552 0 38.1721 1.27884 39.7381 3.33045C40.1077 3.81458 40.0139 4.50596 39.5287 4.87467C39.0434 5.24338 38.3505 5.14981 37.981 4.66568C36.9055 3.25676 34.7955 2.20377 32.253 2.20377C29.7071 2.20377 27.5979 3.25707 26.5257 4.66476C26.1567 5.14928 25.4638 5.24357 24.9782 4.87537C24.4926 4.50716 24.3981 3.81589 24.7671 3.33137Z" fill="#414141" />
                </svg>
                СЕВЕРЯНОЧКА
            </NavLink>

            <NavLink to={`/catalog`} className={cl.catalogBtn} >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 12C2.5 11.7239 2.72386 11.5 3 11.5H21C21.2761 11.5 21.5 11.7239 21.5 12C21.5 12.2761 21.2761 12.5 21 12.5H3C2.72386 12.5 2.5 12.2761 2.5 12Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 6C2.5 5.72386 2.72386 5.5 3 5.5H21C21.2761 5.5 21.5 5.72386 21.5 6C21.5 6.27614 21.2761 6.5 21 6.5H3C2.72386 6.5 2.5 6.27614 2.5 6Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 18C2.5 17.7239 2.72386 17.5 3 17.5H21C21.2761 17.5 21.5 17.7239 21.5 18C21.5 18.2761 21.2761 18.5 21 18.5H3C2.72386 18.5 2.5 18.2761 2.5 18Z" fill="white" />
                </svg>
                Каталог
            </NavLink>
            <div className={cl.search} >
                <input className={cl.search__input} type="text" placeholder='Найти товар' />
                <svg className={cl.search__icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 10.5C2.5 6.08172 6.08172 2.5 10.5 2.5C14.9183 2.5 18.5 6.08172 18.5 10.5C18.5 14.9183 14.9183 18.5 10.5 18.5C6.08172 18.5 2.5 14.9183 2.5 10.5ZM10.5 3.5C6.63401 3.5 3.5 6.63401 3.5 10.5C3.5 14.366 6.63401 17.5 10.5 17.5C14.366 17.5 17.5 14.366 17.5 10.5C17.5 6.63401 14.366 3.5 10.5 3.5Z" fill="#414141" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.4463 15.4464C15.6415 15.2512 15.9581 15.2512 16.1534 15.4464L21.3534 20.6464C21.5486 20.8417 21.5486 21.1583 21.3534 21.3535C21.1581 21.5488 20.8415 21.5488 20.6463 21.3535L15.4463 16.1535C15.251 15.9583 15.251 15.6417 15.4463 15.4464Z" fill="#414141" />
                </svg>
            </div>
            <NavLink
                to={`/favorites`}
                className={({ isActive }) => `${isActive ? `${cl.favorite} ${cl.active}` : `${cl.favorite}`}`}
            >
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.2046 4.25644C14.3299 3.13067 15.8564 2.49817 17.4482 2.49817C19.0399 2.49817 20.5664 3.13063 21.6916 4.25636C22.8174 5.38164 23.45 6.90829 23.45 8.49999C23.45 10.0917 22.8175 11.6183 21.6917 12.7435C21.6917 12.7436 21.6917 12.7435 21.6917 12.7435L12.8517 21.5835C12.6565 21.7788 12.3399 21.7788 12.1446 21.5835L3.30461 12.7435C0.960963 10.3999 0.960963 6.60009 3.30461 4.25644C5.64826 1.91279 9.44807 1.91279 11.7917 4.25644L12.4982 4.96289L13.2046 4.25644C13.2046 4.25641 13.2046 4.25647 13.2046 4.25644ZM17.4482 3.49817C16.1217 3.49817 14.8496 4.02528 13.9118 4.96346L12.8517 6.02355C12.758 6.11732 12.6308 6.16999 12.4982 6.16999C12.3656 6.16999 12.2384 6.11732 12.1446 6.02355L11.0846 4.96355C9.13149 3.01042 5.96484 3.01042 4.01172 4.96355C2.05859 6.91667 2.05859 10.0833 4.01172 12.0364L12.4982 20.5229L20.9846 12.0364C21.9228 11.0987 22.45 9.82648 22.45 8.49999C22.45 7.17351 21.9229 5.90138 20.9847 4.96363C20.0469 4.02544 18.7747 3.49817 17.4482 3.49817Z" fill="#414141" />
                    {/* <rect x="12.3604" width="11.28" height="11" rx="4" fill="#FF6633" /> */}
                </svg>
                <p className={cl.favorite__text}>Избранное</p>
            </NavLink>
            <NavLink
                to={`/orders`}
                className={({ isActive }) => `${isActive ? `${cl.order} ${cl.active}` : `${cl.order}`}`}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3325 1.89776C11.3324 1.89785 11.3327 1.89767 11.3325 1.89776L3.33366 5.89721L3.33255 5.89776C2.82288 6.15102 2.50045 6.67089 2.50005 7.24V16.7635C2.49608 17.3334 2.81541 17.8563 3.32416 18.113C3.32387 18.1129 3.32445 18.1132 3.32416 18.113L11.3237 22.1128C11.7462 22.3242 12.2438 22.3243 12.6663 22.1129L20.6664 18.1128L20.6675 18.1122C21.1773 17.8589 21.4997 17.3389 21.5 16.7697V7.24026C21.4997 6.67105 21.1773 6.15106 20.6675 5.89776L20.6664 5.89721L12.6675 1.89776C12.6674 1.89767 12.6677 1.89786 12.6675 1.89776C12.2474 1.6892 11.7527 1.68919 11.3325 1.89776ZM10.8875 1.00223C11.5883 0.654 12.4118 0.654 13.1125 1.00223L13.1137 1.00278L21.1125 5.00223C21.1124 5.00215 21.1127 5.00231 21.1125 5.00223C21.9618 5.42448 22.4995 6.29123 22.5 7.23973V16.77C22.4995 17.7184 21.9624 18.5852 21.1132 19.0074C21.113 19.0075 21.1134 19.0073 21.1132 19.0074L13.1138 23.0071C13.1138 23.0072 13.1138 23.0071 13.1138 23.0071C12.4097 23.3594 11.5806 23.3595 10.8764 23.0072C10.8764 23.0072 10.8765 23.0072 10.8764 23.0072L2.87644 19.0072L2.87506 19.0065C2.02685 18.5791 1.49413 17.708 1.50005 16.7584V7.24C1.50055 6.29154 2.03772 5.4248 2.88695 5.00253C2.88675 5.00263 2.88715 5.00243 2.88695 5.00253L10.8864 1.00278L10.8875 1.00223Z" fill="#414141" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.87321 5.93638C1.9967 5.6894 2.29704 5.58928 2.54403 5.71278L12.0004 10.441L21.4568 5.71278C21.7038 5.58928 22.0041 5.6894 22.1276 5.93638C22.2511 6.18337 22.151 6.48371 21.904 6.6072L12.224 11.4472C12.0833 11.5176 11.9176 11.5176 11.7768 11.4472L2.09682 6.6072C1.84983 6.48371 1.74971 6.18337 1.87321 5.93638Z" fill="#414141" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V22.76C12.5 23.0361 12.2761 23.26 12 23.26C11.7239 23.26 11.5 23.0361 11.5 22.76V11C11.5 10.7239 11.7239 10.5 12 10.5Z" fill="#414141" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.5529 3.27638C6.67639 3.02939 6.97673 2.92928 7.22372 3.05277L17.2237 8.05277C17.4707 8.17627 17.5708 8.4766 17.4473 8.72359C17.3238 8.97058 17.0235 9.0707 16.7765 8.9472L6.7765 3.9472C6.52951 3.82371 6.4294 3.52337 6.5529 3.27638Z" fill="#414141" />
                </svg>
                <p className={cl.order__text}>Заказы</p>
            </NavLink>
            <NavLink to={`/basket`}
                className={({ isActive }) => `${isActive ? `${cl.active} ${cl.basket}` : `${cl.basket}`}`}>
                <svg width="24" height="24" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 25C6 23.6193 7.11929 22.5 8.5 22.5C9.88071 22.5 11 23.6193 11 25C11 26.3807 9.88071 27.5 8.5 27.5C7.11929 27.5 6 26.3807 6 25ZM8.5 23.5C7.67157 23.5 7 24.1716 7 25C7 25.8284 7.67157 26.5 8.5 26.5C9.32843 26.5 10 25.8284 10 25C10 24.1716 9.32843 23.5 8.5 23.5Z" fill="#414141" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M18 25C18 23.6193 19.1193 22.5 20.5 22.5C21.8807 22.5 23 23.6193 23 25C23 26.3807 21.8807 27.5 20.5 27.5C19.1193 27.5 18 26.3807 18 25ZM20.5 23.5C19.6716 23.5 19 24.1716 19 25C19 25.8284 19.6716 26.5 20.5 26.5C21.3284 26.5 22 25.8284 22 25C22 24.1716 21.3284 23.5 20.5 23.5Z" fill="#414141" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5C1.22386 4.5 1 4.72386 1 5C1 5.27614 1.22386 5.5 1.5 5.5H5.08051C5.83783 9.79147 6.60333 14.0643 7.24931 18.3709C7.43288 19.5947 8.48416 20.5 9.72165 20.5H19.8597C21.0514 20.5 22.0774 19.6588 22.3111 18.4903L23.7503 11.2942C23.936 10.366 23.226 9.5 22.2795 9.5H7.66046C7.3575 9.5 7.07797 9.58901 6.84436 9.74093L5.99239 4.91311C5.95023 4.67418 5.74262 4.5 5.5 4.5H1.5ZM7.166 11.0742C7.12065 10.7719 7.35478 10.5 7.66046 10.5H22.2795C22.595 10.5 22.8316 10.7887 22.7698 11.0981L21.3305 18.2942C21.1903 18.9953 20.5747 19.5 19.8597 19.5H9.72165C8.97916 19.5 8.34839 18.9568 8.23825 18.2225L7.166 11.0742Z" fill="#414141" />
                    {/* <rect x="12.3604" width="11.28" height="11" rx="4" fill="#FF6633" /> */}
                    <path d="M18.8804 9C18.8137 9 18.757 8.98 18.7104 8.94C18.6704 8.89333 18.6504 8.83667 18.6504 8.77V3.17L16.9904 4.45C16.9437 4.49 16.8937 4.51 16.8404 4.51C16.7804 4.51 16.7237 4.47667 16.6704 4.41L16.4104 4.08C16.377 4.03333 16.3604 3.98667 16.3604 3.94C16.3604 3.86 16.3937 3.79667 16.4604 3.75L18.6404 2.07C18.7137 2.02333 18.8004 2 18.9004 2H19.4104C19.477 2 19.5304 2.02333 19.5704 2.07C19.617 2.11 19.6404 2.16333 19.6404 2.23V8.77C19.6404 8.83667 19.617 8.89333 19.5704 8.94C19.5304 8.98 19.477 9 19.4104 9H18.8804Z" fill="white" />
                </svg>
                <p className={cl.basket__text}>Корзина</p>
            </NavLink>
            <AuthButton />
        </header>
    )
}

export default Header;