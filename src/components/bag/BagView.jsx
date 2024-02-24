import './BagView.css'
import React, { useState } from 'react';


function BagItem({ product }) {
    return (
        <div className='BagItem'>
            <div className='image_container_bagview'>
                <img className='image_bag_view'
                    src={product.image}
                    alt="" />
            </div>

            <div className='info_BagItem'>
                <b className='name'>{product.name}</b>
                <h className='price'>{"$" + product.price}</h>
                <div className='add-remove-item-space'>
                    <button className='add-remove-buttom'>–</button>
                    <h className='count_BatItem'>50</h>
                    <button className='add-remove-buttom'>+</button>
                </div>
            </div>
        </div>
    )
}

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

function Scrollable({ products }) {
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
        <div className='scrollable_container_BagView'>
            <Vinnete top={scrollPosition > 0} bottom={isScrollable} />
            <div className='scrollable_BagView'
                onScroll={handleScroll}
            >
                {products}
            </div>
        </div>
    );
}
function BuyBag({ price }) {
    return (
        <div className='box_buy'>
            <div className='space_full_box_buy'>
                <div className='total_price_space'>
                    <h>{"Total"}</h>
                    <h className='price_buy_box'>{"$" + price}</h>
                </div>
                <a className='continue_shopping_a' href="">continue shopping</a>
            </div>
            <button className='checkout_buttom' > checkout</button>
        </div>
    )
}

function BagView({ items }) {
    let products = Object.values(items).map(item => {
        return <BagItem product={item} />
    })

    let price = 0
    return (
        <div className='full_bag_view'>
            <h className  = 'your_bag_text'> your bag</h>
            
            <div className='bag_view'>
                <div className='box_bags'>
                    <Scrollable products={products} />
                </div>
                <div>
                    <BuyBag price={price} />
                </div>
            </div >
        </div>
    );
}

export default BagView;
