import './ProductView.css'
import './mobile.css'
import React, { useState } from 'react';
import { BagPush, ProductCount } from '../../bag/localStorageFunctions';
import { SetEmpty, SetProducts } from '../../../store/bag/functions';
import { UseDispatch, useDispatch } from 'react-redux';
import { SetAlert, SetProductAlert, UnSetAlert } from '../../../store/notAviableProducCount/functions';
import AlertMessage from '../../alertMessage/aviableProduct';

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

function ImageComponent({ product }) {
    const [current_image, set_current] = useState(0)
    let [last_image, set_last] = useState(0)
    let images = product.images
    let points = Array.from({ length: images.length }, (_, i) =>
        <Point index={i} current_image={current_image} set_current={set_current} set_last={set_last} />)

    return (
        <div className='box_images'>
            {/* <div> */}
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
            {/* </div> */}
        </div>
    );
}


/**
*@param {boolean} top define si se usara difusion en la parte superior 
*@param {boolean} bottom define si se usara difusion en la parte inferior 
*@returns {React.JSX.Element}
*/
function Vinnete({ top = false, bottom = false }) {
    return (<div className='vinnete_contain'>
        {top && <div className='top-vinnete'></div>}
        {bottom && <div className='bottom-vinnete'></div>}
    </div>
    );
}

function Scrollable({ product }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrollable, setIsScrollable] = useState(true);

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        const position = Math.ceil(
            (scrollTop / (scrollHeight - clientHeight)) * 100
        );
        setScrollPosition(position);
        setIsScrollable(scrollHeight > clientHeight && position < 99)
    };

    return (
        <div className='scrollable_container'>
            <Vinnete top={scrollPosition > 0} bottom={isScrollable} />
            <div className='scrollable'
                onScroll={handleScroll}
            >

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
    );
}

function ProductView({ product }) {
    const dispatch = useDispatch()
    const [timerAlert, setTimerAlert] = useState(null)
    let [count, setCount] = useState(ProductCount(product))
    return (
        <div className='product_view'>
            <AlertMessage />
            <ImageComponent product={product} />

            <div className='box_info'>
                <h1 className='name'> {product.name} </h1>
                <p className='price_view'>{"$" + product.price} </p>
                <div className='add_space'>
                    <button
                        className='add_bag'
                        onClick={() => {
                            if (!BagPush(product)) {
                                SetProductAlert(dispatch, product)
                                SetAlert(dispatch)
                                //Estas linea es para controlar la vida del componente de alerta
                                if (timerAlert)
                                    clearTimeout(timerAlert)
                                setTimerAlert(setTimeout(() => { UnSetAlert(dispatch) }, 2500))
                                //--------------------------------------------------------------
                            }
                            setCount(ProductCount(product));
                            SetEmpty(dispatch);
                            SetProducts(dispatch);
                        }
                        }
                    >
                        Add to bag
                    </button>
                    <p className='add_count'>
                        {count}
                    </p>
                </div>
                <Scrollable product={product} />
            </div>
        </div >
    );
}

export default ProductView;
