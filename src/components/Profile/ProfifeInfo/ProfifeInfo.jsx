import React from 'react';
import Preloader from '../../common/preloader/Preloader';

import './ProfifeInfo.css';


const ProfifeInfo = (props) => {
        if(!props.profile) {
                <Preloader/>
        }
        return (
                <div className='profile'>
                        <div className='description'>
                                <img src={props.profile.photos.large}
                                className='ava'
                                />
                                <div className='profile-info'>
                                        <div className='profile-info-name'>11111111111111</div>
                                        <div className='profile-info-age'>28 лет</div>
                                        <div className='profile-info-gender'>мужчина</div>
                                </div>
                        </div>
                        <div className='profile-status'>
                                <p5>Здесь будет информация о пользователе!</p5>
                        </div>  
                </div>
        );
}
export default ProfifeInfo;


//props.profile.photos.large
//'https://pbs.twimg.com/profile_images/612140046938959872/OaKOyzpC_400x400.jpg'