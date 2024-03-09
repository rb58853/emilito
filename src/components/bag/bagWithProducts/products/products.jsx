import './products.css'
import './mobile.css'
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BagPush, BagPop, BagPushCount, ProductCount, FullCount } from "../../localStorageFunctions.js";
import { SetEmpty, SetProducts } from "../../../../store/bag/functions.jsx";


export function Products() {
    const bag = useSelector((state) => state.bag)
    let products = bag.products
    let result = Object.values(products).map(item => {
        return <BagItem product={item["product"]} count={item["count"]} />
    })
    return result
}

/*Los hook estos tienen bug, sera algun tipo de hash que usan o algo, pero cuando o usas bien orientado a objetos da problemas, en este caso cuando se elimina un producto el count del proximo se ajusta al que se elimino, el count como hook */

function BagItem({ product, count }) {
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
                    <TextProductCount product={product} selfCount={count} />
                    <AddButton product={product} />
                </div>
            </div>
        </a>
    )
}

function AddButton({ product, setCount }) {
    const dispatch = useDispatch();
    return <button className='add-remove-button'
        onClick={() => {
            if (!FullCount(product)) {
                BagPush(product);
                SetProducts(dispatch);
                // setCount(ProductCount(product))
                SetEmpty(dispatch)
            }
        }
        }
    >+</button>
}

function RemoveButton({ product, setCount }) {
    const dispatch = useDispatch();
    return <button className='add-remove-button'
        onClick={() => {
            BagPop(product);
            SetProducts(dispatch)
            // setCount(ProductCount(product))
            SetEmpty(dispatch)
        }
        }
    >–</button>
}

function TextProductCount({ product, selfCount }) {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const [count, setCount] = useState(selfCount)
    const [setingCount, setSetingCount] = useState(false)

    return (
        <div className='item-count-space'>
            <text
                className={`item-count-text ${setingCount ? 'hide' : ''}`}
            >
                {selfCount}
            </text>

            <input
                type="number"
                className={`input-bag-item-count ${setingCount ? '' : 'hide'}`}
                value={count}
                ref={inputRef}
                onClick={() => {
                    setSetingCount(true);
                    setCount(ProductCount(product))
                }}
                onInput={x => {
                    setCount(x.target.value)
                }
                }
                onBlur={x => {
                    BagPushCount(product, x.target.value);
                    SetProducts(dispatch);
                    SetEmpty(dispatch);
                    setSetingCount(false);
                }}
                onKeyDown={event => {
                    if (event.key == "Enter") {
                        BagPushCount(product, event.target.value);
                        SetProducts(dispatch);
                        SetEmpty(dispatch);
                        setSetingCount(false);
                        inputRef.current.blur();
                    }
                }}
            ></input>
        </div>
    )
}
