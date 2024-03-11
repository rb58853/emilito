
import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';

import products from "../data/static_products.js";
import series from '../data/static_series.js';

import Marketplace from "../components/marketplace/Marketplace.jsx";
import ProductView from "../components/products/views/ProductView.jsx";
import BagView from "../components/bag/BagView.jsx";
import SerieProducts from '../components/marketplace/Series/ProductsFromSerie/ProductsFromSerie.jsx';
import About from '../components/about/about.jsx';
import Terms from '../components/terms/terms.jsx';

let all = {
    key: 'all',
    name: "all",
    products: Object.keys(products).map(key => { return key })
}

const routes = [
    {
        path: "/",
        element: <App content={<Marketplace />} />,
    },
    {
        path: "/bag",
        element: <App content={<BagView step={1} />} />,
    },
    {
        path: "/bag-details",
        element: <App content={<BagView step={2} />} />,
    },
    {
        path: "/about",
        element: <App content={<About />} />,
    },
    {
        path: "/terms",
        element: <App content={<Terms />} />,
    },
    {
        path: "/shop",
        element: <App content={<SerieProducts serie={all} />} />,
    },
    {
        path: "/serie-all",
        element: <App content={<SerieProducts serie={all} />} />,
    }

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