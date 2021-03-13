import React from 'react';
import { NavLink } from 'react-router-dom';
import noAvatar from '../image/no_avatar.png';


let User = (props) => {
        let user = props.usersData;
        return (
                <div className='users' key={user.id}>
                        <div className='users-avatar'>
                                <NavLink to={'/profile/' + user.id}>
                                        <div> {user.photos.small == null ? <img src={noAvatar} /> : <img src={user.photos.small} />} </div>
                                </NavLink>
                                <div className='users-follow-button'>
                                        {user.follow
                                                ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                                        onClick={() => { props.followTC(user.id) }}>Отписаться</button>
                                                : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                                        onClick={() => { props.unFollowTC(user.id) }}>Подписаться</button>
                                        }
                                </div>
                        </div>
                        <div className='users-name'>
                                <div>{user.name}</div>
                                <div className='status'>{user.status}</div>
                        </div>
                        <div className='users-locaton'>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                        </div>
                </div>
        )
}
       
export default User