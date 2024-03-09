import './view.css'
import './mobile.css'
import React, { useState } from 'react';
import { Products } from './products/products';
import BuyBag from './buySpace/buy.jsx'
import { useSelector } from 'react-redux';

/**
*@param {boolean} top define si se usara difusion en la parte superior 
*@param {boolean} bottom define si se usara difusion en la parte inferior 
*@returns {React.JSX.Element}
*/
function Vinnete({ top = false, bottom = false }) {
    return (<div>

        {top && <div className='top-vinnete_BagView'></div>}
        {bottom && <div className='bottom-vinnete_BagView'></div>}
    </div>
    );
}

function Scrollable() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrollable, setIsScrollable] = useState(true);
    // [products, setProducts] = useState(Products)

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        const position = Math.ceil(
            (scrollTop / (scrollHeight - clientHeight)) * 100
        );
        setScrollPosition(position);
        setIsScrollable(scrollHeight > clientHeight && position < 99)
    };

    return (
        <div className='scrollable_container_BagView'>
            <Vinnete top={scrollPosition > 0} bottom={isScrollable} />
            <div className='scrollable_BagView'
                onScroll={handleScroll}
            >
                {Products()}
            </div>
        </div>
    );
}


export function BagWithProducts() {
    let price = 0
    const bag = useSelector((state) => state.bag)
    Object.values(bag.products).forEach(item => {
        price += parseFloat(item["product"].price) * parseInt(item["count"]);
    })
    
    return (
        <div className='full_bag_view'>
            <h className='your_bag_text'> your bag</h>
            {/* {JSON.parse(localStorage.getItem("bag"))['p1']} */}
            <div className='bag_view'>
                <div className='box_bags'>
                    <Scrollable />
                </div>
                {/* <div> */}
                {/* Zona de la compra */}
                <BuyBag price={price} />
                {/* </div> */}
            </div >
        </div>
    );
}
