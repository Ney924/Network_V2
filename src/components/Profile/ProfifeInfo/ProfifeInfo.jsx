import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import './ProfifeInfo.css';


const ProfifeInfo = (props) => {
        return (
               props.profile == null? 
                <Preloader/>:
                <div className='profile'>
                        <div className='description'>
                        <img src={props.profile == null? 'https://pbs.twimg.com/profile_images/612140046938959872/OaKOyzpC_400x400.jpg': props.profile.photos.large}
                                className='ava'
                                />
                                <div className='profile-info'>
                                        <div className='profile-info-name'>{props.profile.fullName}</div>
                                        <div className='profile-info-age'>28 лет</div>
                                        <div className='profile-info-gender'>мужчина</div>
                                </div>
                        </div>
                        <div className='profile-status'>
                                <p5>{props.profile.aboutMe}</p5>
                        </div>  
                </div>
        );
}
export default ProfifeInfo;


//props.profile.photos.large
//'https://pbs.twimg.com/profile_images/612140046938959872/OaKOyzpC_400x400.jpg'
// <img src={props.profile == null? 'https://pbs.twimg.com/profile_images/612140046938959872/OaKOyzpC_400x400.jpg': props.profile.photos.large}