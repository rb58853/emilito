import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import products from "./data/static_products";

import Marketplace from "./components/marketplace/Marketplace.jsx";
import ProductView from "./components/products/views/ProductView.jsx";
import BagView from "./components/bag/BagView.jsx";

const routes = [
  {
    path: "/",
    element: <App content={<Marketplace />} />,
  },
  {
    path: "/bag",
    element: <App content={<BagView items={products} />} />,
  },
]

Object.keys(products).forEach((key) => {
  routes.push({
    path: key,
    element: <App content={<ProductView product={products[key]} />} />,
  });
});

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);