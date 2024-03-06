import './style/desktop.css'
import React, { useState } from 'react';

function SerieMarket({serie} ) {
    let [zoom, setZoom] = useState(false);
    return (
        <a
            onMouseOver={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            className={`box-serie ${zoom ? 'zoom' : ''}`}
            href={'serie-'+serie.key}
        >
            <div className='serie_image_container'>
                <img className='image' src={serie.image} alt="" />
            </div>
            <div className={`serie_info_container ${zoom ? 'show' : ''}`}>
                <p> {serie.name} </p>
            </div>
        </a>
    );
}

export default SerieMarket;
