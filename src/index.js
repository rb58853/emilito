import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import products from "./data/static_products.js";

import Marketplace from "./components/marketplace/Marketplace.jsx";
import ProductView from "./components/products/views/ProductView.jsx";
import BagView from "./components/bag/BagView.jsx";

const routes = [
  {
    path: "/",
    element: <App content={<Marketplace/>}/>,
  },
]

// products.forEch((product) => {
//   routes.push({
//     path: product.name,
//     element: <ProductView product={product}/>,
//   });
// });

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router = {router}/>
    </React.StrictMode>
);