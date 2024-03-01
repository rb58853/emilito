import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import products from "./data/static_products";
import series from './data/static_series.js';

import Marketplace from "./components/marketplace/Marketplace.jsx";
import ProductView from "./components/products/views/ProductView.jsx";
import BagView from "./components/bag/BagView.jsx";
import SerieProducts from './components/marketplace/ProductsFromSerie.jsx';

import {StartBag} from './components/bag/BagFunctions.js'
// StartBag();

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

Object.keys(series).forEach((key) => {



  routes.push({
    path: "serie-" + key,
    element: <App content={<SerieProducts serie={series[key]} />} />,
  });
});

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);