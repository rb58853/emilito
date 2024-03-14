import './products.css'
import './mobile.css'
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { BagPush, BagPop, BagPushCount, ProductCount } from "../../../localStorageFunctions.js";
import { SetEmpty, SetProducts } from "../../../../../store/bag/functions.jsx";
import { SetProductAlert, SetAlert, UnSetAlert, UnSetProductAlert } from '../../../../../store/notAviableProducCount/functions.jsx';

let [timerAlert, setTimerAlert] = [null, null]

export function Products() {
    const products = useSelector((state) => state.bag).products

    let result = Object.values(products).map(item => {
        return <BagItem product={item["product"]} count={item["count"]} key={item["product"].key} />
    })
    return result
}

function BagItem({ product, count, key }) {
    [timerAlert, setTimerAlert] = useState(null);
    // Al usar estos hooks como partes de un objeto, se le debe definir un key unico al objeto, para que de esta forma React pueda manejar correctamente los estados, de otra forma suelen ocurrir errores
    let [willDelete, setWillDelete] = useState(false)

    return (
        <Link
            key={key}
            className={`bag-item ${willDelete ? 'delete' : ''}`}
            to={`/${product.key}`}
        >
            <div className='bag-item-image-container'>
                <img className='bag-item-image'
                    src={product.image}
                    alt="" />
            </div>

            <div className='bag-item-info'>
                <b className='name'>{product.name}</b>
                <h className='price'>{"$" + product.price}</h>

                <Link className='add-remove-item-space'>
                    <RemoveButton product={product} setWillDelete={setWillDelete} />
                    <TextProductCount product={product} selfCount={count} setWillDelete={setWillDelete}/>
                    <AddButton product={product} />
                </Link>
            </div>
        </Link>
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
                setTimerAlert(setTimeout(() => { UnSetAlert(dispatch) }, 2500))
                //--------------------------------------------------------------
            }

            SetProducts(dispatch);
            SetEmpty(dispatch)
        }
        }
    >+</button>
}

function RemoveButton({ product, setWillDelete }) {
    const dispatch = useDispatch();
    return <button className='add-remove-button'
        onClick={() => {
            let willDelete = false
            if (!BagPop(product)) {
                willDelete = true
                setWillDelete(true)
                setTimeout(() => { SetProducts(dispatch) }, 500)
                setTimeout(() => { SetEmpty(dispatch) }, 500)
            }
            if (!willDelete) {
                SetEmpty(dispatch)
                SetProducts(dispatch)
            }
        }
        }
    >–</button>
}

function TextProductCount({ product, selfCount, setWillDelete }) {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const [inChangeCount, setInChangeCount] = useState(false)

    let changeValue = (x) => {
        if (!BagPushCount(product, x.target.value)) {
            SetProductAlert(dispatch, product)
            SetAlert(dispatch)
            //Estas linea es para controlar la vida del componente de alerta
            if (timerAlert)
                clearTimeout(timerAlert)
            setTimerAlert(setTimeout(() => { UnSetAlert(dispatch) }, 2500))
            //--------------------------------------------------------------
        }
        if (x.target.value == '0' || x.target.value == '') {
            setWillDelete(true)
            setTimeout(() => { SetProducts(dispatch) }, 500)
            setTimeout(() => { SetEmpty(dispatch) }, 500)
        }
        else {
            SetProducts(dispatch);
            SetEmpty(dispatch);
        }


        setInChangeCount(false);
    }

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
                    changeValue(x)
                }}
                onKeyDown={event => {
                    if (event.key == "Enter") {
                        changeValue(event)
                        inputRef.current.blur();
                    }
                }}
            ></input>
        </div>
    )
}
