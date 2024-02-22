import './ProductMarket.css'
import React, { useState } from 'react';

function SerieMarket({serie} ) {
    let [zoom, setZoom] = useState(false);
    return (
        <div
            onMouseOver={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            className={`box-serie ${zoom ? 'zoom' : ''}`}
        >
            <div className='serie_image_container'>
                <img className='image' src={serie.image} alt="" />
            </div>
            <div className={`serie_info_container ${zoom ? 'show' : ''}`}>
                <p> {serie.name} </p>
                {/* <p> {serie.technique} </p> */}
                {/* <p className='price'>{"$"+serie.price} </p> */}
            </div>
        </div>
    );
}

export default SerieMarket;
