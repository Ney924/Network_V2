import React from 'react';
import './ProfilePanel.css'

const ProfilePanel = (props) => {
        return (
                <div className='profile-panel'>
                        <button onClick={props.setTabPost}>
                                Посты
                        </button>
                        <button>
                                Подписки
                        </button>
                        <button onClick={props.setTabPhoto}>
                                Мои фотографии
                        </button>
                        <button className='right-button'>
                                Обо мне
                        </button>
                </div>
        )
}
export default ProfilePanel;