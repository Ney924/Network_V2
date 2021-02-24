import React from 'react';
import './Users.css';
import * as axios from 'axios';
import noAvatar from './../assets/images/no_avatar.png';


let Users = (props) => {
        
        let getUsersPage = () => {
                if (props.usersData.length === 0)
                {
                        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                                props.setUsers(response.data.items);   
                        })       
        }           
        }
        
        
        
        return (
                <div> 
                        <button onClick={getUsersPage}> Users</button>
                        {props.usersData.map(u => 
                                        <div className='users' key={u.id}>
                                                <div className='users-avatar'>
                                                        <div>{u.photos.small !=null ? u.photos.small : noAvatar}</div>
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
                                )}
                 </div>
        )
       
}

export default Users