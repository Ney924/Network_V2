import React from 'react';
import './ProfifeInfo.css';


const ProfifeInfo = () => {
        return (
                <div className='profile'>
                        <div className='description'>
                                <img src='https://pbs.twimg.com/profile_images/612140046938959872/OaKOyzpC_400x400.jpg' 
                                className='ava'
                                />
                                <div className='profile-info'>
                                        <div className='profile-info-name'>Илья Аксенов</div>
                                        <div className='profile-info-age'>28 лет</div>
                                        <div className='profile-info-gender'>мужчина</div>
                                </div>
                        </div>
                        <div className='profile-status'>
                        Здесь будет информация о пользователе!
                        </div>
                        
                </div>
        );
}
export default ProfifeInfo;


//! Нужно сделать крассиво, сейчас хер чего!
        