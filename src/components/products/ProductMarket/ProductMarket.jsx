import './style/desktop.css'
import './style/mobile.css'
import React, { useState } from 'react';

function ProductMarket({ product }) {
    let [zoom, setZoom] = useState(false);
    return (
        <a
            onMouseOver={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            className={`box-product ${zoom ? 'zoom' : ''}`}
            href={product.key}
        >
            <div className='image_container'>
                <img className='image' src={product.image} alt="" />
            </div>
            <div className={`info_container ${zoom ? 'show' : ''}`}>
                <text> {product.name} </text>
                <text> {product.technique} </text>
                <text className='price'>{"$" + product.price} </text>
            </div>
        </a>
    );
}

export default ProductMarket;
