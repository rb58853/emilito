import './style/desktop.css'
import './style/mobile.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductMarket({ product }) {
    let [zoom, setZoom] = useState(false);
    return (
        <Link
            onMouseOver={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            className={`box-product ${zoom ? 'zoom' : ''}`}
            to={"/"+product.key}
        >
            <div className='image_container'>
                <img className='image' src={process.env.PUBLIC_URL +product.image} alt="" />
            </div>
            <div className={`info_container ${zoom ? 'show' : ''}`}>
                <text> {product.name} </text>
                <text> {product.technique} </text>
                <text className='price'>{"$" + product.price} </text>
            </div>
        </Link>
    );
}

export default ProductMarket;
