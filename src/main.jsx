import { StrictMode } from 'react'
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import './index.css';

import Delivery from './components/delivery/Delivery.jsx';
import Stock from './components/stock/Stock.jsx';
import Enter from './components/enter/Enter.jsx';
import Catalog from './components/catalog/Catalog.jsx';
import Category from './components/category/Category.jsx';
import ProductInfo from './components/productInfo/ProductInfo.jsx';
import Root from './components/root/Root.jsx';
import Favorites from './components/favorites/Favorites.jsx'
import Orders from './components/orders/Orders.jsx';
import Basket from './components/basket/Basket.jsx'

import { store } from './app/store.js';

let router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <>
          <Delivery />
          <Stock />
        </>
      },
      {
        path: 'enter',
        element: <Enter />
      },
      {
        path: 'catalog',
        element: <Catalog />
      },
      {
        path: 'favorites',
        element: <Favorites />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'basket',
        element: <Basket />
      },
      {
        path: 'catalog/:id',
        element: <Category />
      },
      {
        path: 'productinfo/:id',
        element: <ProductInfo />
      },
      
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Enter/>
    </Provider>
  </StrictMode>,
)
