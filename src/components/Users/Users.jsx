import React from 'react';
import './Users.css';
import noAvatar from '../image/no_avatar.png';
import {NavLink} from 'react-router-dom'
import * as axios from 'axios';

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
                                                <NavLink to={'/profile/' + u.id}>
                                                        <div> {u.photos.small == null ? 
                                                                <img src={noAvatar}/> : 
                                                                <img src={u.photos.small}/>
                                                                } 
                                                        </div>
                                                </NavLink>
                                                <div className='users-follow-button'>
                                                        {u.follow 
                                                                ? <button onClick={ ()=> {
                                                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true, headers: {"API-KEY": "785eab70-df14-4fb5-9f9e-100f69f4a368"}})
                                                                        .then( response => {
                                                                                if (response.data.resultCode==0) {
                                                                                        props.unFollow(u.id)  
                                                                                }
                                                                        });    
                                                                }}>Отписаться</button>
                                                                : <button onClick={ ()=> {
                                                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true, headers: {'API-KEY': '785eab70-df14-4fb5-9f9e-100f69f4a368'}})
                                                                        .then( response => {
                                                                                if (response.data.resultCode==0) {
                                                                                        props.follow(u.id)  
                                                                                }
                                                                        });
                                                                }}>Подписаться</button>
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