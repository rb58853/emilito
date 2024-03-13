import { Link } from 'react-router-dom';
import './style/desktop.css'
import './style/mobile.css'

import React, { useState } from 'react';

function SerieMarket({serie, ref, key} ) {
    let [zoom, setZoom] = useState(false);
    return (
        <Link
            onMouseOver={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            className={`box-serie ${zoom ? 'zoom' : ''}`}
            to={'/serie-'+serie.key}
        >
            <div className='serie_image_container'>
                <img className='image' src={serie.image} alt="" />
            </div>
            <div className={`serie_info_container ${zoom ? 'show' : ''}`}>
                <p> {serie.name} </p>
            </div>
        </Link>
    );
}

export default SerieMarket;
