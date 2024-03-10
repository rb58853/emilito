import './products.css'
import './mobile.css'
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BagPush, BagPop, BagPushCount, ProductCount } from "../../localStorageFunctions.js";
import { SetEmpty, SetProducts } from "../../../../store/bag/functions.jsx";
import { SetProductAlert, SetAlert, UnSetAlert, UnSetProductAlert } from '../../../../store/notAviableProducCount/functions.jsx';

let [timerAlert, setTimerAlert] = [null, null]

export function Products() {
    const bag = useSelector((state) => state.bag)

    let products = bag.products
    let result = Object.values(products).map(item => {
        return <BagItem product={item["product"]} count={item["count"]} />
    })
    return result
}

function BagItem({ product, count }) {
    [timerAlert, setTimerAlert] = useState(null)
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

function AddButton({ product }) {
    const dispatch = useDispatch();
    return <button className='add-remove-button'
        onClick={() => {
            if (!BagPush(product)) {
                SetProductAlert(dispatch, product)
                SetAlert(dispatch)
                //Estas linea es para controlar la vida del componente de alerta
                if (timerAlert)
                    clearTimeout(timerAlert)
                setTimerAlert(setTimeout(() => { UnSetAlert(dispatch) }, 2000))
                //--------------------------------------------------------------
            }

            SetProducts(dispatch);
            SetEmpty(dispatch)
        }
        }
    >+</button>
}

function RemoveButton({ product }) {
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
    const [inChangeCount, setInChangeCount] = useState(false)

    return (
        <div className='item-count-space'>
            <text
                className={`item-count-text ${inChangeCount ? 'hide' : ''}`}
            >
                {selfCount}
            </text>

            <input
                type="number"
                className={`input-bag-item-count ${inChangeCount ? '' : 'hide'}`}
                ref={inputRef}
                onClick={(x) => {
                    setInChangeCount(true);
                    x.target.value = ProductCount(product)
                }}
                onBlur={x => {
                    BagPushCount(product, x.target.value);
                    SetProducts(dispatch);
                    SetEmpty(dispatch);
                    setInChangeCount(false);
                }}
                onKeyDown={event => {
                    if (event.key == "Enter") {
                        BagPushCount(product, event.target.value);
                        SetProducts(dispatch);
                        SetEmpty(dispatch);
                        setInChangeCount(false);
                        inputRef.current.blur();
                    }
                }}
            ></input>
        </div>
    )
}
