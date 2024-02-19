import './ProductView.css'
import React, { useState } from 'react';

function ProductView({ product }) {
    return (
        <div className='product_view'>
            <div className='box_images'>
                <div>
                    <div className='image_container_view'>
                        <img className='image' src={product.image} alt="" />
                    </div>
                    <div className='points'>
                        punticos
                    </div>
                </div>
            </div>

            <div className='box_info'>
                <h1 className='name'> {product.name} </h1>
                <p className='price_view'>{"$" + product.price} </p>
                <div className='add_space'>
                    <p className='add_bag'>Add to bag</p>
                    <p className='add_count'>1</p>
                </div>
                <div className='scrollable'>
                    <div className='text_block'>
                        <p> {product.support} </p>
                        <p>{product.dimension}</p>
                    </div>
                    <div className='text_block'>
                        <p> Limited edition of {product.limited} </p>
                        <p>{product.signed}</p>
                    </div>
                    <div className='text_block'>
                        <p> {product.description} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductView;
