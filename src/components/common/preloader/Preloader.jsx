import React from 'react';
import './Preloader.css';
import PreloaderGif from './../../image/Loading_progress.gif';

let Preloader = () => {
        return (
                <div className='preloader'>
                         <img src={PreloaderGif}/>
                </div>
        );
}

export default Preloader;