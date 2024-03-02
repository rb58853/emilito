
import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';

import products from "../data/static_products.js";
import series from '../data/static_series.js';

import Marketplace from "../components/marketplace/Marketplace.jsx";
import ProductView from "../components/products/views/ProductView.jsx";
import BagView from "../components/bag/BagView.jsx";
import SerieProducts from '../components/marketplace/ProductsFromSerie.jsx';
import About from '../components/about/about.jsx';


const routes = [
    {
        path: "/",
        element: <App content={<Marketplace />} />,
    },
    {
        path: "/bag",
        element: <App content={<BagView/>} />,
    },
    {
        path: "/about",
        element: <App content={<About/>} />,
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

export const router = createBrowserRouter(routes)