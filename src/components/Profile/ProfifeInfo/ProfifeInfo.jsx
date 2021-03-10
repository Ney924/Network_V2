import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import './ProfifeInfo.css';
//import ProfileStatus from './ProfileStatus';
import ProfileStatusHook from './ProfileStatusHook';


const ProfifeInfo = (props) => {
        return (
               props.profile == null? 
                <Preloader/>:
                <div className='profile'>
                        <div className='description'>
                        <img src={props.profile.photos.large == null||undefined ? 'https://pbs.twimg.com/profile_images/612140046938959872/OaKOyzpC_400x400.jpg': props.profile.photos.large}
                                className='ava'
                                />
                                <div className='profile-info'>
                                        <div className='profile-info-name'>{props.profile.fullName}</div>
                                        <div className='profile-info-age'>28 лет</div>
                                        <div className='profile-info-gender'>мужчина</div>
                                </div>
                        </div>
                        <ProfileStatusHook status={props.status} updateUserStatusTC={props.updateUserStatusTC}/>
                </div>
        );
}
export default ProfifeInfo;