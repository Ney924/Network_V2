import React from 'react';
import './ProfilePanel.css'

const ProfilePanel = (props) => {
        return (
                <div className='profile-panel'>
                        <button>
                                Посты
                        </button>
                        <button>
                                Подписки
                        </button>
                        <button>
                                Мои фотографии
                        </button>
                        <button className='right-button'>
                                Обо мне
                        </button>
                </div>
        )
}
export default ProfilePanel;