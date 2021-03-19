import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import './ProfifeInfo.css';
import ProfileStatusHook from './ProfileStatusHook';
import Avatar from './../../image/no_avatar.png';

const ProfifeInfo = (props) => {
        const addPhoto = (e) => {
                if (e.target.files.length) {
                        props.saveFotoTC(e.target.files[0])
                }
        }

        return (
                props.profile == null ?
                        <Preloader /> :
                        <div className='profile'>
                                <div className='description'>
                                        <img src={props.profile.photos.large == null || undefined ? Avatar : props.profile.photos.large}
                                                className='ava'
                                        />
                                        <div className='profile-info'>
                                                <div className='profile-info-name'>{props.profile.fullName}</div>
                                                <div className='profile-info-item'>28 лет</div>
                                                <div className='profile-info-item'>мужчина</div>
                                        </div>
                                        <div className='photos-profile'>
                                                {props.isOwner && <input type={'file'} id='file' onChange={addPhoto} />}              {/*чтобы привязать label к input мы задаём for по id, которыйзадан input-у*/}
                                                <label for='file'>Добавить аватар</label>
                                        </div>
                                </div>
                                <ProfileStatusHook status={props.status} updateUserStatusTC={props.updateUserStatusTC} />
                        </div>
        );
}
export default ProfifeInfo;