import React from 'react';
import './Users.css';
import noAvatar from '../image/no_avatar.png';

let Users = (props) => {
        let pagesCount = Math.ceil(props.totalCount/props.pagesSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++ ) {
                pages.push(i);
        }
       
        return (
                <div className='users-page'> 
                        <div className='button-page'>
                                {pages.map(c => {
                                        return (
                                        <button 
                                                className='one-button-page'
                                                onClick={()=> props.onPageChanged(c)}>
                                                {c}
                                        </button>)
                                })}
                        </div>
                        {props.usersData.map(u => 
                                <div className='users' key={u.id}>
                                        <div className='users-avatar'>
                                                <div> {u.photos.small == null ? 
                                                        <img src={noAvatar}/> : 
                                                        <img src={u.photos.small}/>
                                                } 
                                                </div>
                                                <div>
                                                        {u.follow 
                                                                ? <button onClick={ ()=> {props.unFollow(u.id)}}>Подписаться</button>
                                                                : <button onClick={ ()=> {props.follow(u.id)}}>Отписаться</button>
                                                        }
                                                </div>
                                        </div>
                                        <div className='users-name'>
                                                <div>{u.name}</div>
                                                <div className='status'>{u.status}</div>
                                        </div>
                                        <div className='users-locaton'>
                                                <div>{'u.location.country'}</div>
                                                <div>{'u.location.city'}</div>
                                        </div>
                                </div>
                        )
                        }
                </div>
        )
}

export default Users