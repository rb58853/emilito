import './ProductMarket.css'
import React, { useState } from 'react';

function ProductMarket({ product }) {
    let [zoom, setZoom] = useState(false);
    return (
        <a
            onMouseOver={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            className={`box-product ${zoom ? 'zoom' : ''}`}
            href=''
        >
            <div className='image_container'>
                <img className='image' src={product.image} alt="" />
            </div>
            <div className={`info_container ${zoom ? 'show' : ''}`}>
                <div>
                    <p> {product.name} </p>
                    <p> {product.technique} </p>
                    <p className='price'>{"$" + product.price} </p>
                </div>
            </div>
        </a>
    );
}

export default ProductMarket;
