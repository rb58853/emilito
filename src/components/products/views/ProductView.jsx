import './ProductView.css'
import React, { useState } from 'react';

function ChangeImage(index, set_current, set_last, current) {
    var current_image = document.getElementById('current')
    var last_image = document.getElementById('last')

    current_image.addEventListener('animationend', function () {
        this.classList.remove('fade_in');
    })
    current_image.classList.add('fade_in')
    last_image.addEventListener('animationend', function () {
        this.classList.remove('fade_out');
    })
    last_image.classList.add('fade_out')
    set_last(current)
    set_current(index)

}

function Point({ index, current_image, set_current, set_last }) {
    let [highlight, set_highlight] = useState(false)
    return (
        <div>
            <img
                onMouseEnter={() => set_highlight(true)}
                onMouseLeave={() => set_highlight(false)}
                onClick={() => ChangeImage(index, set_current, set_last, current_image)}

                className={`point ${(highlight || index == current_image) ? 'highlight' : ""}`}

                src={(highlight || index == current_image) ? "images/icons/Black_Circle.png" : "images/icons/White_Circle.png"} alt="" />
        </div>
    )
}

function ProductView({ product }) {
    let [add_highlight, set_add_highlight] = useState(false)
    let [current_image, set_current] = useState(0)
    let [last_image, set_last] = useState(0)
    let images = product.images
    let points = Array.from({ length: images.length }, (_, i) =>
        <Point index={i} current_image={current_image} set_current={set_current} set_last={set_last} />)

    return (
        <div className='product_view'>
            <div className='box_images'>
                <div>
                    <div className='image_container_view'>
                        <img id='current'
                            className='image_view'
                            src={images[current_image]}
                            alt="" />

                        <img id='last'
                            className='image_view_hide'
                            src={images[last_image]}
                            alt="" />


                        <div className='right_to_click'
                            onClick={() => ChangeImage((current_image + 1) % images.length, set_current, set_last, current_image)}
                        >
                        </div>
                        <div className='left_to_click'
                            onClick={() => {
                                if (current_image > 0)
                                    ChangeImage(current_image - 1, set_current, set_last, current_image)
                                else
                                    ChangeImage(images.length - 1, set_current, set_last, current_image)
                            }
                            }
                        >
                        </div>
                    </div>
                    <div className='points'>
                        {points}
                    </div>
                </div>
            </div>

            <div className='box_info'>
                <h1 className='name'> {product.name} </h1>
                <p className='price_view'>{"$" + product.price} </p>
                <div className='add_space'>
                    <button

                        className={'add_bag'}>
                        Add to bag
                    </button>
                    <p className='add_count'>1</p>
                </div>
                <div className='scrollable_container'>
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
        </div >
    );
}

export default ProductView;
