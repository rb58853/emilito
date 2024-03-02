import './products.css'
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BagPush, BagPop, BagPushCount, ProductCount, FullCount } from "../../localStorageFunctions.js";
import { SetEmpty, SetProducts } from "../../../../store/bag/functions.jsx";

let [count_, setCount] = [null, null]

export function Products() {
    const bag = useSelector((state) => state.bag)
    let products = bag.products
    let result = Object.values(products).map(item => {
        return <BagItem product={item["product"]} count={item["count"]} />
    })
    return result
    return products.toString()
}

function BagItem({ product, count }) {
    [count_, setCount] = useState(count)

    return (
        <a className='bag-item'
        // href=''
        >
            <div className='bag-item-image-container'>
                <img className='bag-item-image'
                    src={product.image}
                    alt="" />
            </div>

            <div className='bag-item-info'>
                <b className='name'>{product.name}</b>
                <h className='price'>{"$" + product.price}</h>

                <div className='add-remove-item-space'>
                    <RemoveButton product={product} />
                    <TextProductCount product={product} />
                    <AddButton product={product} />
                </div>
            </div>
        </a>
    )
}

function AddButton({product}) {
    const dispatch = useDispatch();
    return <button className='add-remove-button'
        onClick={() => {
            if (!FullCount(product)) {
                BagPush(product);
                SetProducts(dispatch);
                setCount(ProductCount(product))
                SetEmpty(dispatch)
            }
        }
        }
    >+</button>
}

function RemoveButton({product}) {
    const dispatch = useDispatch();
    return <button className='add-remove-button'
        onClick={() => {
            BagPop(product);
            SetProducts(dispatch)
            setCount(ProductCount(product))
            SetEmpty(dispatch)
        }
        }
    >–</button>
}

function TextProductCount({product}) {
    const dispatch = useDispatch();
    const inputRef = useRef();

    return <input
        type="number"
        className='bag-item-count'
        value={count_}
        ref={inputRef}
        onInput={x => {
            setCount(x.target.value)
        }
        }
        onBlur={x => {
            BagPushCount(product, x.target.value);
            SetProducts(dispatch);
            SetEmpty(dispatch)
        }}
        onKeyDown={event => {
            if (event.key == "Enter") {
                BagPushCount(product, event.target.value);
                SetProducts(dispatch);
                SetEmpty(dispatch)
                inputRef.current.blur();
            }
        }}

    ></input>
}
