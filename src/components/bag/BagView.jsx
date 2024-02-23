import '../products/views/ProductView.css'
import './BagView.css'
import React, { useState } from 'react';


function BagItem({ product }) {
    return (
        <div className='box_image'>
            <div>
                <div className='image_container_view'>
                    <img className='image_view'
                        src={product.image}
                        alt="" />
                </div>
            </div>
        </div>
    );
}

/**
*@param {boolean} top define si se usara difusion en la parte superior 
*@param {boolean} bottom define si se usara difusion en la parte inferior 
*@returns {React.JSX.Element}
*/
function Vinnete({ top = false, bottom = false }) {
    return (<div>

        {top && <div className='top-vinnete'></div>}
        {bottom && <div className='bottom-vinnete'></div>}
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
        <div className='scrollable_container'>
            {/* <Vinnete top={scrollPosition>0} bottom={isScrollable} /> */}
            <div className='scrollable'
                // onScroll={handleScroll}
            >
                products
            </div>
        </div>
    );
}

function BagView({ items }) {
    let products = Object.values({ items }).map(item => {
        return <BagItem product={item} />
    })
    return (
        <div className='bag_view'>
            <div className='box_bags'>
                <Scrollable products={products} />
                asds
            </div>
        </div >
    );
}

export default BagView;
